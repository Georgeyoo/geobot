const mongoose = require('mongoose');
const DATA = require('./schema');

const roster = [
	{	
		first: "George",
		middle: "C",
		last: "Yoo",
		email: "gcyoosf@gmail.com",
		phone: "4153415647",
		role: "admin"
	},
	{
		first: "Toby",
		middle: "J",
		last: "Test",
		email: "tobytest@test.com",
		phone: "4155067718",
		role: "student"

	}
];

mongoose.connect('mongodb://localhost/slackathon');

roster.map(data => {
  // Initialize a model with movie data
  const roster = new DATA(data);
  // and save it into the database
  roster.save();
});