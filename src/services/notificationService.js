const crypto = require('crypto');

function createLocationRequestPayload({ requestId, adminId, userId, taskId }) {
  return {
    data: {
      type: 'LOCATION_REQUEST',
      requestId: String(requestId),
      adminId: adminId !== undefined && adminId !== null ? String(adminId) : '',
      userId: userId !== undefined && userId !== null ? String(userId) : '',
      taskId: taskId !== undefined && taskId !== null ? String(taskId) : ''
    },
    notification: {
      title: 'Location requested',
      body: 'Admin is asking for your location'
    }
  };
}

function buildFcmMessage({ deviceToken, requestId, adminId, userId, taskId }) {
  if (!deviceToken) {
    const err = new Error('deviceToken is required');
    err.status = 400;
    throw err;
  }

  const payload = createLocationRequestPayload({ requestId, adminId, userId, taskId });

  return {
    token: deviceToken,
    data: payload.data,
    notification: payload.notification
  };
}

async function sendFcmNotification(message) {
  const serverKey = process.env.FCM_SERVER_KEY;
  if (!serverKey) {
    const err = new Error('FCM_SERVER_KEY is required to send notification');
    err.status = 500;
    throw err;
  }

  const response = await fetch('https://fcm.googleapis.com/fcm/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `key=${serverKey}`
    },
    body: JSON.stringify({
      to: message.token,
      notification: message.notification,
      data: message.data
    })
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok || body?.failure > 0) {
    const err = new Error(body?.results?.[0]?.error || 'Failed to send FCM notification');
    err.status = 502;
    throw err;
  }

  return body;
}

function generateResetToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = {
  createLocationRequestPayload,
  buildFcmMessage,
  sendFcmNotification,
  generateResetToken
};
