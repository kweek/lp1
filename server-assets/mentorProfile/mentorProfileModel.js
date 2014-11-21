var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MentorProfile = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true, uniqueness: true },
	phoneNumber: { type: Number, required: true, uniqueness: true },
	subject: [],
	academic: [],
	sports: [],
	tech: []
});

module.exports = mongoose.model('MentorProfile', MentorProfile)