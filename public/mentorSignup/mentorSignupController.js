var app = angular.module('localPair1');

app.controller('mentorSignupController', function($scope, $modal, $location, mentorAuthService){

		// $scope.toggle = true;

		// $scope.toggle = function() {
		// 	if(toggle === !toggle){
		// 		return true;
		// 	}
		// 	$location.path('/createProfile');
		// }
		 

		$scope.submit = function() {

			mentorAuthService.registerMentor($scope.signupMentor).then(function(mentor){
				console.log(mentor);
					$location.path('/createProfile')  //+ user._id, add this to endof path to do it through user id.

				});

			};
			
		});

	// $scope.becomeMentor = function() {
	// 	$modal.open({
	// 		templateUrl: 'mentorSignup/mentorSignup.html',
	// 		controller: function($scope, $modalInstance, $log, mentorAuthService){
	// 			$scope.submit = function() {
	// 				$log.log('Submitting mentor info');
	// 				mentorAuthService.registerMentor($scope.signupMentor).then(function(mentor){
	// 					$log.log(mentor);
	// 					$modalInstance.dismiss('cancel');
	// 				});
	// 			}
	// 			$scope.cancel = function() {
	// 				$modalInstance.dismiss('cancel');
	// 			};
	// 		}
	// 	});
	// };



