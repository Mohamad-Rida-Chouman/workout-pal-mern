// Required Packages
const express = require('express');

// Setup express router
const router = express.Router();

// Setup routes
router.get('/', (req, res) => {
	res.json({ message: 'Get all workouts' });
});

// Export routes
module.exports = router;
