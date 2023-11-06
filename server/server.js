// Required packages
require('dotenv').config();
const express = require('express');

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

// Listen for requests
app.listen(process.env.PORT, () => {
	console.log('Listening on port', process.env.PORT);
});
