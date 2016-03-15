'use strict';

angular.module('imginterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
      	authorization: true,
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl'
      });
  });
