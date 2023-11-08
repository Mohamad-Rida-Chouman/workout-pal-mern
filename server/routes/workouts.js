// Required Packages
const express = require('express');
const Workout = require('../models/workoutModel');
const {
	getWorkouts,
	getSingleWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
} = require('../controllers/workoutController');

// Setup express router
const router = express.Router();

// Setup routes
// Get all workouts
router.get('/', getWorkouts);

// Get single workout details
router.get('/:id', getSingleWorkout);

// Post a workout
router.post('/', createWorkout);

// Update a workout
router.patch('/:id', updateWorkout);

// Delete a workout
router.delete('/:id', deleteWorkout);

// Export routes
module.exports = router;
