const crypto = require('crypto');

function createLocationRequestPayload({ requestId, adminId, userId }) {
  return {
    data: {
      type: 'LOCATION_REQUEST',
      requestId: String(requestId),
      adminId: String(adminId),
      userId: String(userId)
    },
    notification: {
      title: 'Location requested',
      body: 'Admin is asking for your location'
    }
  };
}

function buildFcmMessage({ deviceToken, requestId, adminId, userId }) {
  if (!deviceToken) {
    const err = new Error('deviceToken is required');
    err.status = 400;
    throw err;
  }

  const payload = createLocationRequestPayload({ requestId, adminId, userId });

  return {
    token: deviceToken,
    data: payload.data,
    notification: payload.notification
  };
}

function generateResetToken() {
  return crypto.randomBytes(32).toString('hex');
}

module.exports = {
  createLocationRequestPayload,
  buildFcmMessage,
  generateResetToken
};
