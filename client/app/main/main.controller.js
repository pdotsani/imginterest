'use strict';

angular.module('imginterestApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, Auth, imageSvc) {
    $scope.user = {};
    $scope.errors = {};
    $scope.imgUrl;
    $scope.isLoggedIn = Auth.isLoggedIn;
    
    // Load Images
    $scope.$on('load-images', function(){
    	$http.get('/api/images/').success(function(data){
    	   $scope.imgs = data;
    	   console.log($scope.imgs); 
        });
    });

    $scope.addImage = function() {
    	console.log($scope.imgUrl);
    	console.log(Auth.getCurrentUser()._id);
    	// Save Image
    	imageSvc.saveImage($scope.imgUrl, Auth.getCurrentUser()._id);
    		
    	// Refresh Image Cache
    	$rootScope.$broadcast('load-images');
    	console.log($scope.imgs)
    	$scope.imgUrl = '';
    }

    $scope.delImage = function(imgId) {
    	console.log(imgId);
    	imageSvc.deleteImage(imgId);
        $rootScope.$broadcast('load-images');
    }

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.email,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };

    $rootScope.$broadcast('load-images');
  });
