'use strict';

angular.module('imginterestApp')
  .controller('HomeCtrl', function ($rootScope, $scope, $http, $location, $route, Auth, imageSvc, $window) {
    $scope.imgs = [];
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.currentUser = Auth.getCurrentUser();
    $scope.imgUrl = '';
    console.log($scope.currentUser);
    
    // Clear Images
    $scope.$on('clear-images', function(){
      $scope.imgs = [];
    });

    // Load Images
    $scope.$on('load-images', function(){
      $http.get('/api/images/').success(function(data){
            var tmpimgs = [];
        data.forEach(function(image){
          if(image.owner === $scope.currentUser.name) {
            tmpimgs.push(image);
          }
        });
        $scope.imgs = tmpimgs;
        console.log($scope.imgs);
      });
    });

    $scope.addImage = function() {
    	// Save Image
    	imageSvc.saveImage($scope.imgUrl, $scope.currentUser._id, $scope.currentUser.name);
    		
    	// Refresh Image Cache
    	$rootScope.$broadcast('load-images');
    	$scope.imgUrl = '';
    };

    $scope.delImage = function(imgId) {
    	imageSvc.deleteImage(imgId);
      $rootScope.$broadcast('load-images');
    };

    $rootScope.$broadcast('load-images');
  });
