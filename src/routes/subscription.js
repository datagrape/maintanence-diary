// routes/subscription.js
const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

// Routes
router.post('/', subscriptionController.subscription);

module.exports = router;
