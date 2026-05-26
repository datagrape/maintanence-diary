const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

let cachedJsonCreds = null;

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
  const creds = getFcmCredentials();
  const { projectId, clientEmail, privateKey } = creds;
  const accessToken = await getGoogleAccessToken({ clientEmail, privateKey });

  const response = await fetch(`https://fcm.googleapis.com/v1/projects/${projectId}/messages:send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`
    },
    body: JSON.stringify({
      message: {
        token: message.token,
        notification: message.notification,
        data: message.data
      }
    })
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok || body?.error) {
    const err = new Error(body?.error?.message || 'Failed to send FCM notification');
    err.status = 502;
    throw err;
  }

  return body;
}

function getFcmCredentials() {
  // 1) Prefer JSON file credentials
  const jsonPathFromEnv = process.env.FCM_SERVICE_ACCOUNT_JSON_PATH;
  const resolvedJsonPath = jsonPathFromEnv
    ? path.resolve(process.cwd(), jsonPathFromEnv)
    : path.resolve(process.cwd(), 'firebase-service-account.json');

  if (!cachedJsonCreds && fs.existsSync(resolvedJsonPath)) {
    const raw = fs.readFileSync(resolvedJsonPath, 'utf8');
    const parsed = JSON.parse(raw);
    cachedJsonCreds = {
      projectId: parsed.project_id,
      clientEmail: parsed.client_email,
      privateKey: parsed.private_key
    };
  }

  if (cachedJsonCreds?.projectId && cachedJsonCreds?.clientEmail && cachedJsonCreds?.privateKey) {
    return cachedJsonCreds;
  }

  // 2) Fallback to env vars
  const projectId = process.env.FCM_PROJECT_ID;
  const clientEmail = process.env.FCM_CLIENT_EMAIL;
  const privateKeyRaw = process.env.FCM_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKeyRaw) {
    const err = new Error(
      'Provide FCM credentials either in firebase-service-account.json (or FCM_SERVICE_ACCOUNT_JSON_PATH) or via FCM_PROJECT_ID, FCM_CLIENT_EMAIL, FCM_PRIVATE_KEY'
    );
    err.status = 500;
    throw err;
  }

  return {
    projectId,
    clientEmail,
    privateKey: privateKeyRaw.replace(/\\n/g, '\n')
  };
}

function base64UrlEncode(input) {
  const raw = Buffer.isBuffer(input) ? input : Buffer.from(input);
  return raw
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

async function getGoogleAccessToken({ clientEmail, privateKey }) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: clientEmail,
    scope: 'https://www.googleapis.com/auth/firebase.messaging',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedClaimSet = base64UrlEncode(JSON.stringify(claimSet));
  const toSign = `${encodedHeader}.${encodedClaimSet}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(toSign);
  signer.end();
  const signature = signer.sign(privateKey);
  const jwt = `${toSign}.${base64UrlEncode(signature)}`;

  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt
    }).toString()
  });

  const tokenBody = await tokenRes.json().catch(() => ({}));
  if (!tokenRes.ok || !tokenBody.access_token) {
    const err = new Error(tokenBody?.error_description || tokenBody?.error || 'Failed to get Google access token');
    err.status = 502;
    throw err;
  }

  return tokenBody.access_token;
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
