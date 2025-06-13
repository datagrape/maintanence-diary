// routes/subscription.js
const express = require('express');
const router = express.Router();
const linkDataUpdateController = require('../controllers/linkDataUpdateController');

// Routes
router.post('/', linkDataUpdateController.linkData);
router.get('/get-link-data', linkDataUpdateController.getLinkData);
router.get('/get-member-link-data', linkDataUpdateController.getMemberLinkData);
router.get('/get-owner-link-data', linkDataUpdateController.getOwnerLinkData);


module.exports = router;
