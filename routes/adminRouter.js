const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

// Admin dashboard route
router.get('/admindashboard', adminController.admindash);

module.exports = router;
