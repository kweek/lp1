var app = angular.module('localPair1', ['ngRoute', 'ui.bootstrap', 'google-maps']);

app.config(function($routeProvider){
	$routeProvider
	  .when('/', {
	  	templateUrl: 'views/home.html',
	  	controller: 'homeController'
	  })
	  .when('/academic', {
	  	templateUrl: 'views/academic.html',
	  	controller: 'academicController'
	  })
	  // .when('/academic/:mentorsId', {
	  // 	templateUrl: 'views/mentor-detail.html',
	  // 	controller: 'mentorDetailController'
	  // })
	  .when('/tech', {
	  	templateUrl: 'views/tech.html',
	  	controller: 'techController'
	  })
	  .when('/music', {
	  	templateUrl: 'views/music.html',
	  	controller: 'musicController'
	  })
	  .when('/sports', {
	  	templateUrl: 'views/sports.html',
	  	controller: 'sportsController'
	  })
	  // .when('/signup', {
	  // 	temlateUrl: 'login/login.html',
	  // 	controller: 'loginController'
	  // })
	  // .when('/login', {
	  // 	templateUrl: 'login/login.html',
	  // 	controller: 'loginController'
	  // })
	  .when('/help', {
	  	templateUrl: 'views/help.html',
	  	controller: 'helpController'
	  })
	  .when('/mentorSignup', {
	  	templateUrl: 'mentorSignup/mentorSignup.html',
	  	controller: 'mentorSignupController'
	  })
	  .when('/createProfile', {
	  	templateUrl: 'views/createProfile.html',
	  	controller: 'createProfileController'
	  })
	  .otherwise({
	  	redirectTo: '/'
	  })


});