// Required packages
require('dotenv').config();
const express = require('express');

// Create an express app
const app = express();

// Create a middleware to get requests details
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the app' });
});

// Listen for requests
app.listen(process.env.PORT, () => {
	console.log('Listening on port', process.env.PORT);
});