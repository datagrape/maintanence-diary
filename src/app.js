// const express = require('express');
// const app = express();
// const path = require('path');
// // Middlewares
// app.use(express.json());

// app.use((req, res, next) => {
    
//     console.log("Incoming:", req.method, req.url);
//     res.setHeader("Access-Control-Allow-Origin", "*"); // only for dev
//     res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
//     res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//     next();
//   });
  
// // ✅ Serve .well-known from root
// app.use('/.well-known', express.static(path.join(__dirname, '../.well-known')));

// app.get('/.well-known/apple-app-site-association', (req, res) => {
//   res.type('application/json');
//   res.sendFile(path.join(__dirname, '../.well-known/apple-app-site-association'));
// });

// // Routes
// const loginRoutes = require('./routes/loginRoutes');
// app.use('/api/login', loginRoutes);

// const registerUserRoutes = require('./routes/registerUserRoutes');
// app.use('/api/registerUser', registerUserRoutes);

// const otpRoutes = require('./routes/otpRoutes');
// app.use('/api/sendotp', otpRoutes);

// const otpVerifyRoutes = require('./routes/otpVerifyRoutes');
// app.use('/api/verifyOTP', otpVerifyRoutes);

// const activityRoutes = require('./routes/activityRoutes');
// app.use('/api/activity', activityRoutes);

// const groupRoutes = require('./routes/groupRoutes');
// app.use('/api/group', groupRoutes);

// const taskRoutes = require('./routes/taskRoutes');
// app.use('/api/task', taskRoutes);

// const subscriptionRoutes = require("./routes/subscription");
// app.use("/api/subscriptionupdate", subscriptionRoutes);

// const linkDataUpdateRoutes = require("./routes/linkDataUpdateRoutes");
// app.use("/api/link-data", linkDataUpdateRoutes);

// // Error handling middleware
// const errorHandler = require('./middlewares/errorHandler');
// app.use(errorHandler);

// module.exports = app;


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

/* Optional pretty route: /otp */
app.get('/otp', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'otp.html'));
});


/* --------------- Use src/.well-known explicitly --------------- */
const WELL_KNOWN_DIR = path.join(__dirname, '.well-known'); // <- your location
const AASA_NAME = 'apple-app-site-association';
const ASSETLINKS_NAME = 'assetlinks.json';

function readAndSendJSON(fileName, res) {
  const full = path.join(WELL_KNOWN_DIR, fileName);
  fs.readFile(full, (err, buf) => {
    if (err) {
      console.error('[.well-known] read error:', full, err.code);
      return res.status(404).json({ error: 'Not Found' });
    }
    res.set('Content-Type', 'application/json');      // required for Apple/Android
    res.set('Cache-Control', 'public, max-age=600');  // optional
    res.send(buf);                                    // no redirects
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


// Optional root alias (only if you want /assetlinks.json to work too)
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

/* ---------------- Your existing routes ---------------- */
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

/* ---------------- Health & errors ---------------- */
app.get('/_health', (req, res) => res.json({ ok: true }));
app.use(require('./middlewares/errorHandler'));

module.exports = app;
