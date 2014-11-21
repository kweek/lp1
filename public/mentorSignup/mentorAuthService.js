var app = angular.module('localPair1');

app.service('mentorAuthService', function($http){
	
	this.registerMentor = function(newMentor) {
		return $http({
			method: 'POST',
			url: 'http://localhost:7000/mentorSignup',
			data: newMentor
		}).then(function(res){
			return res.data;
		})
	}
	this.addToMentor = function(newMentor) {
		return $http({
			method: 'PUT',
			url: 'http://localhost:7000/mentorSignup',
			data: newMentor
		}).then(function(res){
			return res.data;
		})
	}
})