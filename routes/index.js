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


//add route
app.get('/', function(req,res) {
	res.render('index', {
		title:'Add Student'
	});
});
//add submit POST route
app.post('/',function(req,res) {
	let student = new Student();
	console.log(req.body);
	student.name = req.body.name;
	student.class = req.body.class;

	student.save(function(err) {
		if (err) {
			console.log("HEREE")
			return;
		} else {
			res.render('added', {course: student.class});
		}
	})
	return ;
})

module.exports = app;