const prisma = require('../prismaClient');
const crypto = require('crypto');
const { buildFcmMessage, sendFcmNotification } = require('./notificationService');
const ALLOWED_STATUS = new Set(['accepted', 'denied']);

async function ensureUserEnabled(userId, roleLabel) {
  const uid = typeof userId === 'string' ? parseInt(userId, 10) : userId;
  if (!Number.isInteger(uid) || uid <= 0) {
    const err = new Error(`Valid ${roleLabel} is required`);
    err.status = 400;
    throw err;
  }

  const user = await prisma.user.findUnique({
    where: { id: uid },
    select: { id: true, isDisabled: true }
  });

  if (!user) {
    const err = new Error(`${roleLabel} not found`);
    err.status = 404;
    throw err;
  }

  if (user.isDisabled) {
    const err = new Error(`${roleLabel} is deactivated`);
    err.status = 401;
    throw err;
  }

  return user.id;
}

exports.respondToLocationRequest = async (payload) => {
  const {
    requestId,
    adminId,
    userId,
    status,
    location,
    latitude,
    longitude
  } = payload;

  if (!adminId || !userId || !status) {
    const err = new Error('adminId, userId and status are required');
    err.status = 400;
    throw err;
  }

  const normalizedStatus = String(status).trim().toLowerCase();
  if (!ALLOWED_STATUS.has(normalizedStatus)) {
    const err = new Error('status must be one of: accepted, denied');
    err.status = 400;
    throw err;
  }

  const validAdminId = await ensureUserEnabled(adminId, 'adminId');
  const validUserId = await ensureUserEnabled(userId, 'userId');
  const normalizedRequestId = crypto.randomUUID();

  const lat = latitude === undefined || latitude === null || latitude === '' ? null : Number(latitude);
  const lng = longitude === undefined || longitude === null || longitude === '' ? null : Number(longitude);

  if ((lat !== null && Number.isNaN(lat)) || (lng !== null && Number.isNaN(lng))) {
    const err = new Error('latitude and longitude must be valid numbers when provided');
    err.status = 400;
    throw err;
  }

  const response = await prisma.locationRequestResponse.create({
    data: {
      requestId: normalizedRequestId,
      adminId: validAdminId,
      userId: validUserId,
      status: normalizedStatus,
      location: location ? String(location) : null,
      latitude: lat,
      longitude: lng,
      respondedAt: new Date()
    }
  });

  let requestNotification = null;
  if (requestId) {
    const existing = await prisma.locationRequestNotification.findUnique({
      where: { requestId: String(requestId) }
    });

    if (!existing) {
      const err = new Error('requestId not found');
      err.status = 404;
      throw err;
    }

    requestNotification = await prisma.locationRequestNotification.update({
      where: { requestId: String(requestId) },
      data: { status: normalizedStatus }
    });
  }

  return { response, requestNotification };
};

exports.sendLocationRequestNotification = async (payload) => {
  const { deviceToken, taskId } = payload;
  if (!deviceToken || !taskId) {
    const err = new Error('deviceToken and taskId are required');
    err.status = 400;
    throw err;
  }

  const requestId = crypto.randomUUID();
  const message = buildFcmMessage({ deviceToken, requestId, taskId });
  const fcmResponse = await sendFcmNotification(message);

  const request = await prisma.locationRequestNotification.create({
    data: {
      requestId,
      taskId: String(taskId),
      deviceToken: String(deviceToken),
      status: 'pending'
    }
  });

  return { request, fcmResponse };
};
