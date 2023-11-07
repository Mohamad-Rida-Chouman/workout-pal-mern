// Required packages
const mongoose = require('mongoose');

// Create schema variable
const Schema = mongoose.Schema;

// Setup workouts schema
const workoutSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Workout', workoutSchema);
