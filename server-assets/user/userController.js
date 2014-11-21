var User = require('./userModel');

module.exports = {
	signup: function(req, res){
		// req.body //THIS IS YOUR USER DATA FROM THE MODAL
		console.log(req.body, "user info from signup Modal");
		User.findOne({email: req.body.email}).exec(function(err, user){
			console.log(user, err);
			if(err){
				res.send(err);
			}
			if(user){
				res.send({errorMessage: "A user with that email already exists"})
			} else {
				var newUser = new User();
				  newUser.name = req.body.name;
				  newUser.email = req.body.email;
				  newUser.password = req.body.password;
				  newUser.save(function(err){
					if(err){
						res.send(err);
					} else {
						newUser.password = '';
						res.status(200).send(newUser);
					}
				})
			}	
		})
	},
	login: function(req, res){
		// req.body //THIS IS YOUR USER DATA FROM THE MODAL
		console.log(req.body, "user info from login Modal");
		User.findOne({email: req.body.email}).exec(function(err, user){
			console.log(user, err);
			if(err){
				res.send(err);
			}
			if(user){
				if(user.password === req.body.password){
					user.password = '';
					res.status(200).send(user);
				} else {
					res.send({errorMessage: "Wrong Password"})		
				}		
			} else {
				res.send({errorMessage: "There is no Account with that email"})		
			}
		});
	}
}