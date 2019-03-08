let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
	name: {
		type: Number,
		required: true
	},
	class: {
		type: Number,
		required:true
	}
});

let Student = module.exports = mongoose.model('Student',studentSchema);