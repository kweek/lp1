var app = angular.module('localPair1');

app.controller('createProfileController', function($scope, mentorAuthService){
	
	$scope.academic = [{name:'4th-6th Grades', checked: false}, {name:'7th-8th Grades', checked: false}, {name:'Alegebra', checked: false}, {name:'Pre-Calculus', checked: false}, {name: 'Calculus', checked: false}, {name: 'Statistics', checked: false}, {name: 'English Writing', checked: false}, {name:'Science', checked: false}, {name:'Chemistry', checked: false}, {name:'Language - Spanish', checked: false}, {name:'language - French', checked: false}, {name:'Language - Chinese', checked: false}, {name:'GMAT/GRE', checked: false}];
	$scope.sports = [{name: 'Personal Trainer', checked: false}, {name: 'Tennis', checked: false}, {name: 'Basketball', checked: false}, {name: 'Football', checked: false}, {name: 'Baseball', checked: false}, {name: 'Golf', checked: false}, {name: 'Soccer', checked: false}, {name: 'Swimming', checked: false}, {name: 'Horseback Riding', checked: false}];
	$scope.tech = [{name: 'Javascript', checked: false}, {name: 'AngularJS', checked: false}, {name: 'Node.js', checked: false}, {name: 'iOS', checked: false}, {name: 'Swift', checked: false}, {name: 'Android', checked: false}, {name: 'PHP', checked: false}, {name: 'Python', checked: false}, {name: 'Ruby', checked: false}, {name: 'Rails', checked: false}, {name: 'C++', checked: false}, {name: 'Backbone.js', checked: false}, {name: 'Ember.js', checked: false}];
	$scope.music = [{name: 'Piano', checked: false}, {name: 'Guitar', checked: false}, {name: 'Violin', checked: false}, {name: 'Flute', checked: false}, {name: 'Drumbs', checked: false}];
	$scope.mentor = {academic: [], sports: [], tech: [], music: [] };
	
	$scope.checked = function(item) {
		item.checked = true;
		console.log(item)
	}

	$scope.submit = function() {
		for (var i = 0; i < $scope.academic.length; i++) {
			if($scope.academic[i].checked === true){
				$scope.mentor.academic.push($scope.academic[i].name);
			}
		};
		for (var i = 0; i < $scope.sports.length; i++) {
			if($scope.sports[i].checked === true) {
				$scope.mentor.sports.push($scope.sports[i].name);
			}
		};
		for(var i = 0; i < $scope.tech.length; i++) {
			if($scope.tech[i].checked === true) {
				$scope.mentor.tech.push($scope.tech[i].name);
			}
		};
		for(var i = 0; i < $scope.music.length; i++) {
			if($scope.music[i].checked === true) {
				$scope.mentor.music.push($scope.music[i].name);
			}
		};
		mentorAuthService.addToMentor($scope.mentor)
		console.log($scope.mentor);
	}
});