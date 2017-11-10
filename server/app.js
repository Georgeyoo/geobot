const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

// Mongodb connection
mongoose.connect('mongodb://localhost/slackathon')
const db = mongoose.connection;

db.on('error', function(err) {
	console.log('Error: ' + err);
});

db.once('open', function() {
	console.log("Mongoose connection open!");
});
	// .then(() => {
	// 	console.log('Connected to MongoDB');
	// })
	// .catch(err => {
	// 	console.error('App starting error');
	// });

// Morgan Middleware
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));


// Set react build as static front end
app.use(express.static(path.resolve(__dirname, '..', 'build')));


// Route all to react build
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;