var app = angular.module('localPair1');

app.controller('loginController', function($scope, $modal, $log, $location){

//var ModalDemoCtrl = function ($scope, $modal, $log) {

    // $scope.user = {
    //     email: '',
    //     password: ''
    // };


    // $scope.signupUser = {
    // 	name: '',
    // 	email: '',
    // 	password: ''
    // }

$scope.openSignup = function () {
		$modal.open({
            templateUrl: 'login/signupModal.html',
            controller: function ($scope, $modalInstance, $log, authService) {
      			$scope.submit = function() {
      				$log.log('Submiting user info.');
      				authService.signupUser($scope.signupUser).then(function(user){
                    	$log.log(user);
      					$modalInstance.dismiss('cancel');
                $location.path('/')
      				});
                    
                    
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            }
        });
    };


$scope.openLogin = function () {
		$modal.open({
            templateUrl: 'login/loginModal.html',
            controller: function ($scope, $modalInstance, $log, authService) {
      			$scope.submit = function () {
      				$scope.error = '';
                    authService.login($scope.user).then(function(res){
                    	$log.log(res);
                    	if(res.errorMessage){
                    		$scope.error = res.errorMessage;
                    	} else {
                    		//CHange your route
      						$modalInstance.dismiss('cancel');
                  $scope.$apply(function(){
                     $location.path('/sports')  
                  })
                 
                    	}
      				});
                    
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
        });
    };
});



//OTHER WAY 
  //   $scope.open = function () {

		// $modal.open({
  //           templateUrl: 'login/loginModal.html',
  //           backdrop: true,
  //           windowClass: 'modal',
  //           size: 'lg',
  //           controller: 'ModalInstanceCtrl',
  //           resolve: {
  //               user: function () {
  //                   return $scope.user;
  //               }
  //           }
  //       });

		 // modalInstance.result.then(function (selectedItem) {
		 //      $scope.selected = selectedItem;
		 //    }, function () {
		 //      $log.info('Modal dismissed at: ' + new Date());
		 //    });
  	// }






//Part of OTHER WAY
// app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, $log, user) {
//     $scope.user = user;
// 		$scope.submit = function () {
//         $log.log('Submiting user info.');
//         $log.log(user);
//         $modalInstance.dismiss('cancel');
//     }
//     $scope.cancel = function () {
//         $modalInstance.dismiss('cancel');
//     };
// })