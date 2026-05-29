const { Prisma } = require('@prisma/client');
const prisma = require('../prismaClient');
const fetch = require("node-fetch");

function generateOTP(length = 6) {
  return Math.floor(100000 + Math.random() * 900000).toString().slice(0, length);
}

// -------------------------------------------------------
// USER ENABLED CHECK
// -------------------------------------------------------
const ensureUserEnabled = async (userId) => {
  // Early return if user ID is not provided or invalid
  if (!userId) return; 

  const uid = typeof userId === 'string' ? parseInt(userId, 10) : userId;
  
  // If parsing resulted in NaN or invalid number, skip validation (user not required)
  if (isNaN(uid) || uid <= 0) {
    return; // Silently skip if no valid user ID provided
  }

  const user = await prisma.user.findUnique({
    where: { id: uid },
    select: { id: true, isDisabled: true }
  });

  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    err.body = { message: 'User not found' };
    throw err;
  }

  if (user.isDisabled) {
    const err = new Error('User is deactivated');
    err.status = 401;
    err.body = { message: 'User is deactivated' };
    throw err;
  }

  return user;
};

const normalizeIntOrNull = (value) => {
  if (value === undefined || value === null || value === '') return null;
  const parsed = typeof value === 'string' ? parseInt(value, 10) : value;
  return Number.isInteger(parsed) ? parsed : null;
};

const normalizeGuidOrNull = (value) => {
  if (value === undefined || value === null) return null;
  const trimmed = String(value).trim();
  return trimmed || null;
};

// -------------------------------------------------------
// LINK DATA CREATE/UPDATE
// -------------------------------------------------------
exports.linkData = async (
  taskId,
  link,
  owner,
  duedate,
  group,
  member,
  taskname,
  completeddate,
  location,
  subscription,
  updatedBy,
  status,
  userId,
  guid
) => {
  const ALLOWED_TASK_STATUS = new Set(['created', 'assigned', 'completed']);
  const normalizedStatus = String(status || '').trim().toLowerCase();
  const finalStatus =
    normalizedStatus && ALLOWED_TASK_STATUS.has(normalizedStatus)
      ? normalizedStatus
      : (completeddate ? 'completed' : undefined);

  const normalizedUserId = normalizeIntOrNull(userId);
  const normalizedGuid = normalizeGuidOrNull(guid);
  if (normalizedUserId !== null && normalizedGuid) {
    const err = new Error('Provide only one of userId or guid');
    err.status = 400;
    throw err;
  }
  if (normalizedUserId !== null) {
    await ensureUserEnabled(normalizedUserId);
  } else if (!normalizedGuid) {
    const err = new Error('userId or guid is required');
    err.status = 400;
    throw err;
  }

  const existingLink = await prisma.link.findUnique({ where: { link } });
  const linksWithTaskId = await prisma.link.findMany({ where: { taskId } });
  const taskScopeByIdentity = normalizedUserId !== null
    ? { taskId, userId: normalizedUserId, ...(link ? { link } : {}) }
    : { taskId, guid: normalizedGuid, ...(link ? { link } : {}) };
  const taskScopeForCompletion = {
    taskId,
    ...(link ? { link } : {})
  };
  const resolveTaskScope = () =>
    finalStatus === 'completed' ? taskScopeForCompletion : taskScopeByIdentity;

  const allUpdatedByNull =
    linksWithTaskId.length > 0 &&
    linksWithTaskId.every(l => l.updatedBy === null);

  if (!existingLink) {
    const created = await prisma.link.create({
      data: {
        taskId,
        link,
        owner,
        duedate,
        group,
        member,
        taskname,
        completeddate,
        location,
        subscription,
        status: finalStatus || 'created',
        userId: normalizedUserId,
        guid: normalizedGuid
      }
    });

    if (finalStatus) {
      await prisma.task.updateMany({
        where: resolveTaskScope(),
        data: { status: finalStatus, completeddate, updatedBy, location }
      });
    }

    return created;
  }

  if (existingLink && allUpdatedByNull) {
    await prisma.link.updateMany({
      where: { taskId },
      data: {
        completeddate,
        location,
        updatedBy,
        userId: normalizedUserId,
        guid: normalizedGuid,
        ...(finalStatus ? { status: finalStatus } : {})
      }
    });

    if (finalStatus) {
      await prisma.task.updateMany({
        where: resolveTaskScope(),
        data: { status: finalStatus, completeddate, updatedBy, location }
      });
    }

    return prisma.link.findUnique({ where: { link } });
  }

  const updatedLink = linksWithTaskId.find(l => l.updatedBy !== null);

  if (finalStatus) {
    await prisma.link.updateMany({
      where: { taskId },
      data: { status: finalStatus }
    });

    await prisma.task.updateMany({
      where: resolveTaskScope(),
      data: { status: finalStatus, completeddate, updatedBy, location }
    });
  }

  return {
    completeddate: updatedLink?.completeddate,
    location: updatedLink?.location,
    updatedBy: updatedLink?.updatedBy,
    message: 'Link is already updatedBy by someone'
  };
};

// -------------------------------------------------------
// GET MULTIPLE LINKS
// -------------------------------------------------------
exports.getLinkData = async (links) => {
  if (!Array.isArray(links)) {
    throw new Error("Expected an array of links");
  }

  return prisma.link.findMany({
    where: { link: { in: links } }
  });
};

// -------------------------------------------------------
// GET LINKS + ASSOCIATED DEVICE TOKENS
// -------------------------------------------------------
exports.getLinkDataWithDeviceToken = async () => {
  const linkRows = await prisma.link.findMany();

  const taskIds = [...new Set(linkRows.map(row => row.taskId).filter(Boolean))];
  const ownerKeys = [...new Set(linkRows.map(row => row.owner).filter(Boolean))];

  let deviceRows = [];
  if (taskIds.length > 0) {
    deviceRows = await prisma.deviceToken.findMany({
      where: { taskId: { in: taskIds } },
      select: {
        token: true,
        taskId: true,
        userId: true,
        platform: true,
        isActive: true,
        updatedAt: true
      }
    });
  }

  let requestRows = [];
  if (taskIds.length > 0) {
    requestRows = await prisma.locationRequestNotification.findMany({
      where: { taskId: { in: taskIds } },
      select: {
        taskId: true,
        deviceToken: true,
        status: true,
        updatedAt: true
      },
      orderBy: { updatedAt: 'desc' }
    });
  }

  let ownerUsers = [];
  if (ownerKeys.length > 0) {
    ownerUsers = await prisma.user.findMany({
      where: {
        OR: [
          { link: { in: ownerKeys } },
          { email: { in: ownerKeys } }
        ]
      },
      select: {
        id: true,
        name: true,
        email: true,
        link: true
      }
    });
  }

  const devicesByTaskId = deviceRows.reduce((acc, row) => {
    if (!acc[row.taskId]) acc[row.taskId] = [];
    acc[row.taskId].push(row);
    return acc;
  }, {});

  const latestStatusByTaskAndToken = requestRows.reduce((acc, row) => {
    const key = `${row.taskId}::${row.deviceToken}`;
    if (!acc[key]) {
      acc[key] = {
        status: row.status,
        updatedAt: row.updatedAt
      };
    }
    return acc;
  }, {});

  const ownerNameByKey = ownerUsers.reduce((acc, user) => {
    const resolved = user.name || user.email || String(user.id);
    if (user.link) acc[user.link] = resolved;
    if (user.email) acc[user.email] = resolved;
    acc[String(user.id)] = resolved;
    return acc;
  }, {});

  function normalizeLocation(rawLocation) {
    if (rawLocation === null || rawLocation === undefined) return null;
    if (rawLocation === "[object Object]") return null;
    if (typeof rawLocation !== 'string') return rawLocation;

    const trimmed = rawLocation.trim();
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        return JSON.parse(trimmed);
      } catch {
        return rawLocation;
      }
    }
    return rawLocation;
  }

  return linkRows.map(linkRow => {
    const mappedDeviceTokens = (devicesByTaskId[linkRow.taskId] || []).map(tokenRow => {
      const statusKey = `${tokenRow.taskId}::${tokenRow.token}`;
      const requestStatus = latestStatusByTaskAndToken[statusKey];
      return {
        ...tokenRow,
        requestStatus: requestStatus?.status || null,
        requestStatusUpdatedAt: requestStatus?.updatedAt || null
      };
    });

    return {
      ...linkRow,
      ownerId: linkRow.owner,
      owner: ownerNameByKey[linkRow.owner] || linkRow.owner,
      location: normalizeLocation(linkRow.location),
      deviceTokens: mappedDeviceTokens
    };
  });
};

// -------------------------------------------------------
// CHECK ACCESS STATUS
// -------------------------------------------------------
exports.checkLinkAccessed = async (link, device = {}) => {
  const existingLink = await prisma.link.findUnique({ where: { link } });

  if (!existingLink || existingLink.isAccessed == 1) {
    return { message: "Link is expired or not found" };
  }

  const normalizedToken = typeof device.deviceToken === 'string' ? device.deviceToken.trim() : '';
  if (normalizedToken) {
    await prisma.deviceToken.upsert({
      where: { token: normalizedToken },
      update: {
        taskId: existingLink.taskId,
        isActive: true,
        platform: 'unknown'
      },
      create: {
        taskId: existingLink.taskId,
        token: normalizedToken,
        platform: 'unknown',
        isActive: true
      }
    });
  }

  return prisma.link.update({
    where: { link },
    data: { isAccessed: 1 }
  });
};

// -------------------------------------------------------
// GET MEMBER LINK DATA (no user context required)
// -------------------------------------------------------
exports.getMemberLinkData = async (link, otp = null) => {
  const linksArray = Array.isArray(link) ? link : [link];

  const existingLinks = await prisma.link.findMany({
    where: { link: { in: linksArray } }
  });

  if (!existingLinks || existingLinks.length === 0) {
    return { message: "Link(s) not found" };
  }

  return existingLinks;
};

// -------------------------------------------------------
// GET OWNER LINK DATA (requires ensureUserEnabled)
// -------------------------------------------------------
exports.getOwnerLinkData = async (owner) => {

  await ensureUserEnabled(owner);

  const existingLink = await prisma.link.findFirst({ where: { owner } });

  if (existingLink) {
    return prisma.link.findMany({
      where: { owner }
    });
  }

  return [];
};

