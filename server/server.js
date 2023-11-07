// Required packages
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Add Routes
const workoutRoutes = require('./routes/workouts');

// Create an express app
const app = express();

// Create a middleware to get requests details
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.use('/api/workouts', workoutRoutes);

// Connect to DB
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// Listen for requests
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB & listening on port', process.env.PORT);
		});
	})
	.catch((err) => {
		console.log(err);
	});
