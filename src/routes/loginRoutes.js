const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Routes
router.post('/', loginController.loginUser);
module.exports = router;