// Required Packages
const express = require('express');
const Workout = require('../models/workoutModel');
const { createWorkout } = require('../controllers/workoutController');

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

// Post a workout
router.post('/', createWorkout);

// Delete a workout
router.delete('/:id', (req, res) => {
	res.json({ message: 'Deleted the workout' });
});

// Update a workout
router.patch('/:id', (req, res) => {
	res.json({ message: 'Updated the workout' });
});

// Export routes
module.exports = router;
