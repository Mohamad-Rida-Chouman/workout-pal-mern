// Required Packages
const express = require('express');
const Workout = require('../models/workoutModel');

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
router.post('/', async (req, res) => {
	const { title, load, reps } = req.body;
	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

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
