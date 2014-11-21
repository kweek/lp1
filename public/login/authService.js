var app = angular.module('localPair1');

app.service('authService', function($http){

	this.signupUser = function(newUser){
		return $http({
			method: 'POST',
			url: 'http://localhost:7000/signup',
			data: newUser
		}).then(function(res){
			return res.data;
		})
	};

	// this.updateUser = function(user) {
	// 	return $http({
	// 		method: 'PUT',
	// 		url: 'http://localhost:7000/' + user._id
	// 		data: user
	// 	})
	
	this.login = function(user){
		return $http({
			method: 'POST',
			url: 'http://localhost:7000/login',
			data: user
		}).then(function(res){
			return res.data;
		})
	}

})