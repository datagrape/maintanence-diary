const express = require('express');
const router = express.Router();
const locationRequestController = require('../controllers/locationRequestController');

router.post('/respond', locationRequestController.respond);
router.post('/send', locationRequestController.send);

module.exports = router;
