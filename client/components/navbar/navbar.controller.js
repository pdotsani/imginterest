'use strict';

angular.module('imginterestApp')
  .controller('NavbarCtrl', function ($scope, $location, $rootScope, Auth) {

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.homeLink = 
    $scope.logout = function() {
      Auth.logout();
      $rootScope.$broadcast('clear-images');
      $location.path('/');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });