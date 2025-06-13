const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController');

// Routes
router.post('/', activityController.createActivity);
router.post('/list', activityController.getActivityByUser);
router.delete('/', activityController.deleteActivityById);
module.exports = router;