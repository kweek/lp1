var MentorProfile = require('./mentorProfileModel');

module.exports = {
	mentorSignup: function(req, res){
		console.log(req.body, "mentor info from be a mentor signup form");
		MentorProfile.findOne({email: req.body.email}).exec(function(err, mentorProfile){
			console.log(mentorProfile);
			if(err){
				console.log('error finding mentorProfile')
				res.send(err);
			}
			if(mentorProfile){
				console.log('mentorProfile exists already')
				res.send({errorMessage: "A mentor with that email already exists"})
			} else {
				console.log('mentorProfile does not already exist')
				var newMentor = new MentorProfile();
				  newMentor.firstName = req.body.firstName;
				  newMentor.lastName = req.body.lastName;
				  newMentor.email = req.body.email;
				  newMentor.phoneNumber = req.body.phone;
				  newMentor.password = req.body.password;
				  newMentor.academic = req.body.academic;
				  newMentor.sports = req.body.sports;
				  newMentor.tech = req.body.tech;
				  newMentor.music = req.body.music;
				  newMentor.save(function(err){
				  	if(err){
				  		console.log('error while creating newMentor: ' + err)
				  		res.send(err);
				  	} else {
				  		console.log('new mentor successfully created')
				  		newMentor.password = "";
				  	}
				  })
			}
		})
	}


}