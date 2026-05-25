// src/app.js
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

/* ---------------- Core middleware ---------------- */
app.use(express.json());
app.use((req, res, next) => {
  console.log('Incoming:', req.method, req.url);
  res.setHeader('Access-Control-Allow-Origin', '*'); // dev only
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

/* ---------------- Serve HTML/static files ---------------- */
app.use(express.static(path.join(__dirname, 'public')));

/* Optional pretty route: /account-delete */
app.get('/account-delete', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'otp.html'));
});

/* --------------- Use src/.well-known explicitly --------------- */
const WELL_KNOWN_DIR = path.join(__dirname, '.well-known');
const AASA_NAME = 'apple-app-site-association';
const ASSETLINKS_NAME = 'assetlinks.json';

function readAndSendJSON(fileName, res) {
  const full = path.join(WELL_KNOWN_DIR, fileName);
  fs.readFile(full, (err, buf) => {
    if (err) {
      console.error('[.well-known] read error:', full, err.code);
      return res.status(404).json({ error: 'Not Found' });
    }
    res.set('Content-Type', 'application/json');
    res.set('Cache-Control', 'public, max-age=600');
    res.send(buf);
  });
}

/* --------------- AASA (both Apple paths) --------------- */
app.get('/.well-known/apple-app-site-association', (req, res) =>
  readAndSendJSON(AASA_NAME, res)
);
app.get('/apple-app-site-association', (req, res) =>
  readAndSendJSON(AASA_NAME, res)
);

/* --------------- Android assetlinks.json --------------- */
app.get('/.well-known/assetlinks.json', (req, res) =>
  readAndSendJSON(ASSETLINKS_NAME, res)
);

// Optional root alias
app.get('/assetlinks.json', (req, res) =>
  readAndSendJSON(ASSETLINKS_NAME, res)
);

/* --------------- Debug helpers (remove later) --------------- */
app.get('/_debug/wk', (req, res) => {
  let files = [];
  try { files = fs.readdirSync(WELL_KNOWN_DIR); } catch {}
  res.json({
    wellKnownDir: WELL_KNOWN_DIR,
    files,
    aasaExists: fs.existsSync(path.join(WELL_KNOWN_DIR, AASA_NAME)),
    assetlinksExists: fs.existsSync(path.join(WELL_KNOWN_DIR, ASSETLINKS_NAME))
  });
});

// View raw file contents quickly
app.get('/.well-known/_cat/:name', (req, res) => {
  const full = path.join(WELL_KNOWN_DIR, req.params.name);
  fs.readFile(full, (err, buf) => {
    if (err) return res.status(404).json({ error: 'Not Found' });
    if (req.params.name === AASA_NAME || req.params.name.endsWith('.json')) {
      res.set('Content-Type', 'application/json');
    }
    res.send(buf);
  });
});

/* ---------------- Your existing API routes ---------------- */
app.use('/api/login', require('./routes/loginRoutes'));
app.use('/api/registerUser', require('./routes/registerUserRoutes'));
app.use('/api/sendotp', require('./routes/otpRoutes'));
app.use('/api/verifyOTP', require('./routes/otpVerifyRoutes'));
app.use('/api/activity', require('./routes/activityRoutes'));
app.use('/api/group', require('./routes/groupRoutes'));
app.use('/api/task', require('./routes/taskRoutes'));
app.use('/api/subscriptionupdate', require('./routes/subscription'));
app.use('/api/link-data', require('./routes/linkDataUpdateRoutes'));
app.use('/api/account/delete', require('./routes/deleteAccountRoutes'));
app.use('/api/location-request', require('./routes/locationRequestRoutes'));
app.use('/api/forgot-password', require('./routes/forgotPasswordRoutes'));


/* ---------------- Centralized error handler ---------------- */
// app.use((err, req, res, next) => {
//   const status = err.status || 500;

//   const payload = {
//     error: err.status === 409
//       ? err.message
//       : 'Unexpected error. Please try again.'
//   };

//   console.error({ err, path: req.path }, 'request_failed');

//   res.status(status).json(payload);
// });

/* ---------------- Health check ---------------- */
app.get('/_health', (req, res) => res.json({ ok: true }));

/* ---------------- Global fallback error handler ---------------- */
app.use(require('./middlewares/errorHandler'));

module.exports = app;
