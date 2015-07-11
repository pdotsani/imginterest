'use strict';

angular.module('imginterestApp')
  .controller('MainCtrl', function ($rootScope, $scope, $http, $location, Auth, imageSvc, $window) {
    $scope.user = {};
    $scope.errors = {};
    $scope.imgs = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.imgUrl = '';
    
    // Load Images
    $scope.$on('load-images', function(){
      $http.get('/api/images/').success(function(data){
        $scope.imgs = [];
        data.forEach(function(image){
          if(image.ownerId === Auth.getCurrentUser()._id) {
            $scope.imgs.push(image);
          }
        });
        console.log($scope.imgs);
      });
    });

    $scope.addImage = function() {
    	// Save Image
    	imageSvc.saveImage($scope.imgUrl, Auth.getCurrentUser()._id, Auth.getCurrentUser().name);
    		
    	// Refresh Image Cache
    	$rootScope.$broadcast('load-images');
    	$scope.imgUrl = '';
    };

    $scope.delImage = function(imgId) {
    	imageSvc.deleteImage(imgId);
      $rootScope.$broadcast('load-images');
    };

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

    $http.get('/api/images/').success(function(data){
      $scope.imgs = [];
      data.forEach(function(image){
        if(image.ownerId === Auth.getCurrentUser()._id) {
          $scope.imgs.push(image);
        }
      });
      console.log($scope.imgs);
    });
  });
