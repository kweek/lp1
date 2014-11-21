var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var Mentor = new Schema({
	name: {type: String, required: true},
	age: {type: Number},
	email: {type: String, required: true},
	mentorAreas: {type: String, required: true},
	education: {type: String, required: true},
	experience: {type: String}

});

module.exports = mongoose.model('Mentor', Mentor)