'use strict';

angular.module('imginterestApp')
  .config(function ($routeProvider) {
    $routeProvider
  	.when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl'
    });
  });