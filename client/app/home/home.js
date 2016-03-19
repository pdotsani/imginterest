'use strict';

angular.module('imginterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
      	authenticate: true,
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
