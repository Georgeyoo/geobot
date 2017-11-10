const mongoose, { Schema } = require('mongoose');

let DataSchema = new Schema({
	first: {
		type: String
	},
	middle: {
		type: String
	},
	last: {
		type: String
	},
	email: {
		type: String,
		unique: true,
	},
	phone: {
		type: Number,
		unique: true,
	},
	role: {
		type: String
	}
});

export default mongoose.model('data', DataSchema);