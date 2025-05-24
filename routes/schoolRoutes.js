const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// POST /api/addSchool
router.post('/addSchool', schoolController.addSchool);
// routes/schoolRoutes.js
router.get('/listSchools', schoolController.listSchools);

module.exports = router;

