"use strict";

var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	mongoose = require('mongoose'),
	port = 7000,
	Mentor = require('./server-assets/controllers/mentorController'),
	User = require('./server-assets/user/userController'),
	MentorProfile = require('./server-assets/mentorProfile/mentorProfileController');
	// passport = require('passport');
	
var databaseReference = 'mongodb://localhost/localPair1';
var connection = mongoose.connection;

var router = express.Router();
var app = express();
app.use(bodyParser.json());
app.use(cors());
//app.use(session({secret: 'thi$ is re@lly @wes0me'}));
//app.use(passport.initialize());
//app.use(passport.session());
//passport.use(strategy(new LocalStrategy
	//more code))
//authenticateUser function(){
	//passport.authenticate
//}

//requireAuth function

app.post('/signup', User.signup);
app.post('/login', User.login);
app.post('/mentorSignup', MentorProfile.mentorSignup);
app.put('/mentorSignup', MentorProfile.mentorSignup);

app.use(express.static(__dirname + '/public'));





mongoose.connect(databaseReference);
connection.once('open', function(){
	app.listen(port, function(){
		console.log("We are lisening on " + port)
	});
})	
