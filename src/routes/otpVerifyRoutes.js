const express = require('express');
const router = express.Router();
const otpController = require('../controllers/otpVerifyController');

router.post('/', otpController.verifyOtp);

module.exports = router;
