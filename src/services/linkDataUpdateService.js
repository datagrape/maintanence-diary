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
  updatedBy
) => {

  // 🔐 Validate the user performing the update
  await ensureUserEnabled(updatedBy);

  const existingLink = await prisma.link.findUnique({ where: { link } });

  const linksWithTaskId = await prisma.link.findMany({ where: { taskId } });

  const allUpdatedByNull =
    linksWithTaskId.length > 0 &&
    linksWithTaskId.every(l => l.updatedBy === null);

  // ------------------------------------------
  // CASE 1: No link exists → create new entry
  // ------------------------------------------
  if (!existingLink) {
    return prisma.link.create({
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
        subscription
      }
    });
  }

  // --------------------------------------------------------
  // CASE 2: Link exists + all updatedBy are null → first update
  // --------------------------------------------------------
  if (existingLink && allUpdatedByNull) {
    await prisma.link.updateMany({
      where: { taskId },
      data: {
        completeddate,
        location,
        updatedBy,
        isAccessed: 1
      }
    });

    return prisma.link.findUnique({ where: { link } });
  }

  // --------------------------------------------------------
  // CASE 3: Link already updated by someone else → return their values
  // --------------------------------------------------------
  const updatedLink = linksWithTaskId.find(l => l.updatedBy !== null);

  return {
    completeddate: updatedLink?.completeddate,
    location: updatedLink?.location,
    updatedBy: updatedLink?.updatedBy,
    message: "Link is already updatedBy by someone"
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

  return linkRows.map(linkRow => ({
    ...linkRow,
    ownerId: linkRow.owner,
    owner: ownerNameByKey[linkRow.owner] || linkRow.owner,
    location: normalizeLocation(linkRow.location),
    deviceTokens: devicesByTaskId[linkRow.taskId] || []
  }));
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
