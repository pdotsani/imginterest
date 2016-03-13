'use strict';

angular.module('imginterestApp')
  .controller('GuestPageCtrl', function ($scope, $routeParams, $http) {
    $scope.userName = $routeParams.userId;
    console.log($scope.userName);
    $scope.imgs = [];
  	
  	$http.get('/api/images/').success(function(data){
	    data.forEach(function(image){
        if(image.owner === $scope.userName) {
          $scope.imgs.push(image);
        }
      }); 
      console.log($scope.imgs);
    });
  });
