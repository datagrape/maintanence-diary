const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Routes
router.post('/', taskController.createTask);
router.post('/list', taskController.getTaskByUser);
module.exports = router;