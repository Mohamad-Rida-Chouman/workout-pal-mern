// Required packages
const express = require('express');

// Created an express app
const app = express();

// Routes
app.get('/', (req, res) => {
	res.json({ message: 'Welcome to the app' });
});

// Listen for requests
app.listen(4000, () => {
	console.log('Listening on port 4000');
});
