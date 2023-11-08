// Required package
const Workout = require('../models/workoutModel');

// Function to get all workouts
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 });
	res.status(200).json(workouts);
};

// Function to get a single workout
const getSingleWorkout = async (req, res) => {
	const { id } = req.params;
	const singleWorkout = await Workout.findById(id);
	if (!singleWorkout) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	res.status(200).json(singleWorkout);
};

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
	getWorkouts,
	getSingleWorkout,
	createWorkout,
};
