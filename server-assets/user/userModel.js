var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.Types.ObjectId,
	bcrypt = require('bcrypt'),
	SALT_WORK_FACTOR = 10;

var User = new Schema({
	name: {type: String, required: true},
	
	email: {type: String, required: true, uniqueness: true},
	
	password: {type: String, required: true},

	myMentors: [{type: ObjectId, ref: 'Mentor'}]


});


//implemented this part to crypt all of the passwords through bcrypt.
User.pre('save', function(next){
	var user = this;

	//only hash the password if it has been modified or is new.
	if(!user.isModified('password')) {
		return next();
	}
	//generate a salt
	bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
		if(err){
			return next(err);
		}
		//hash the password using our new salt
		bcrypt.hash(user.password, salt, function(err, hash){
			if(err){
				return next(err);
			}
			//override the cleartext password with the hashed one
			user.password = hash;
			next();
		});
	});
});

User.methods.comparePassword = function(candidatePassword, cb){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if(err){
			return cb(err);
			cb(null, isMatch);
		}
	})
}

module.exports = mongoose.model('User', User)


