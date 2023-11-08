// Required package
const Workout = require('../models/workoutModel');

// Function to get all workouts

// Function to get a single workout

// Function to create a workout
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body;
	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Function to update a workout

// Function to delete a workout

// Export module
module.exports = {
	createWorkout,
};
