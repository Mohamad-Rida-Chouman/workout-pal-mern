// Required package
const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// Function to get all workouts
const getWorkouts = async (req, res) => {
	const workouts = await Workout.find({}).sort({ createdAt: -1 });
	res.status(200).json(workouts);
};

// Function to get a single workout
const getSingleWorkout = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	const singleWorkout = await Workout.findById(id);
	if (!singleWorkout) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	res.status(200).json(singleWorkout);
};

// Function to create a workout
const createWorkout = async (req, res) => {
	const { title, load, reps } = req.body;
	let emptyFields = [];
	if (!title) {
		emptyFields.push('title');
	}
	if (!load) {
		emptyFields.push('load');
	}
	if (!reps) {
		emptyFields.push('reps');
	}
	if (emptyFields.length > 0) {
		return Response.status(400).json({
			error: 'Please fill in all the fields',
			emptyFields,
		});
	}
	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(200).json(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// Function to update a workout
const updateWorkout = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	const updateWorkout = await Workout.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);
	if (!updateWorkout) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	res.status(200).json(updateWorkout);
};

// Function to delete a workout
const deleteWorkout = async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	const deleteWorkout = await Workout.findOneAndDelete({ _id: id });
	if (!deleteWorkout) {
		return res.status(404).json({ error: 'Workout not found!' });
	}
	res.status(200).json(deleteWorkout);
};

// Export module
module.exports = {
	getWorkouts,
	getSingleWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout,
};
