'use strict';

angular.module('imginterestApp')
  .controller('AllUsersCtrl', function ($scope, $http, Auth) {
    $scope.users = [];

    $http.get('/api/images/').success(function(data){
    	data.forEach(function(img){
	    	if($scope.users.indexOf(img.owner) === -1 &&
	    		img.owner !== Auth.getCurrentUser().name) {
          $scope.users.push(img.owner);
        }
    	});
    	console.log($scope.users);
    });
  });
