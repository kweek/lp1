

var MentorModel = require('../services/mentorService');

module.exports = {
	getMentor: function(req, res){
		MentorModel.find().exec(function(err, mentors){
			res.send(mentors);
		})
	},

}