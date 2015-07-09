'use strict';

angular.module('imginterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/allUsers', {
        templateUrl: 'app/allUsers/allUsers.html',
        controller: 'AllUsersCtrl'
      });
  });
