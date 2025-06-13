const express = require('express');
const router = express.Router();
const userController = require('../controllers/registerUserController');

// Routes
router.post('/', userController.createUser);

module.exports = router;
