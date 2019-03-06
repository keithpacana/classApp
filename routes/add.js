var express = require('express');
var router = express.Router();
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


//connect to db
mongoose.connect('mongodb+srv://keithpacana:sparky99@cluster0-sw1fm.mongodb.net/test?retryWrites=true');
let db = mongoose.connection;

db.once('open',function() {
	console.log('connected');
});

db.on('error',function(err) {
	console.log(err);
});

//init app
const app = router;

//bring models
let Student = require('../models/student');

//add submit POST route
app.post('/',function(req,res) {
		Student.find({class : req.body.search}, function(err, students){
		if (err) {
			console.log("heree");
		}
		else {
		res.render('add_student', {
			title: req.body.search[0],
			students: students
		});
	}
	})
})

module.exports = app;