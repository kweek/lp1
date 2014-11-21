var app = angular.module('localPair1');

app.controller('academicController', function($scope) {
	
	$scope.map = {
		center: {
			latitude: 36,
			longitude: -109
		},
		zoom: 6,
		control: {},
		bounds: {}
	};
	$scope.bounds = {
		sw: {
			latitude: 0,
			longitude: 0
		},
		ne: {
			latitude: 4,
			longitude: 4
		}
	};

        $scope.error = "";
        $scope.myMarkers = [];
 
        $scope.showPosition = function (position) {
        	console.log(position)
            $scope.map.control.refresh({latitude: position.coords.latitude, longitude: position.coords.longitude})
            $scope.map.zoom = 15;
            $scope.userMarker = [{
            	id: 1,
            	latitude: position.coords.latitude,
            	longitude: position.coords.longitude
            }]
            $scope.$apply();
 
            //var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
            //$scope.model.myMap.setCenter(latlng);
            //$scope.myMarkers.push(new google.maps.Marker({ map: $scope.model.myMap, position: latlng }));
        }
 
        $scope.showError = function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    $scope.error = "User denied the request for Geolocation."
                    break;
                case error.POSITION_UNAVAILABLE:
                    $scope.error = "Location information is unavailable."
                    break;
                case error.TIMEOUT:
                    $scope.error = "The request to get user location timed out."
                    break;
                case error.UNKNOWN_ERROR:
                    $scope.error = "An unknown error occurred."
                    break;
            }
            $scope.$apply();
        }
 
        $scope.getLocation = function () {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition($scope.showPosition, $scope.showError);
            }
            else {
                $scope.error = "Geolocation is not supported by this browser.";
            }
        }
 
        $scope.getLocation();

        

});

