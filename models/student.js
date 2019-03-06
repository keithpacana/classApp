let mongoose = require('mongoose');

let studentSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	class: {
		type: String,
		required:true
	}
});

let Student = module.exports = mongoose.model('Student',studentSchema);