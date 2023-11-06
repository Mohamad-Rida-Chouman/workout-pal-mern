// Required Packages
const express = require('express');

// Setup express router
const router = express.Router();

// Setup routes
// Get all workouts
router.get('/', (req, res) => {
	res.json({ message: 'Get all workouts' });
});

// Get single workout details
router.get('/:id', (req, res) => {
	res.json({ message: 'Get a single workout' });
});

// Export routes
module.exports = router;
