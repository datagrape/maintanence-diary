const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

// Routes
router.post('/', groupController.createGroup);
router.post('/list', groupController.getGroupByUser);
router.delete('/', groupController.deleteGroupById);
module.exports = router;