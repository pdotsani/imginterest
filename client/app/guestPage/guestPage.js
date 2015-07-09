'use strict';

angular.module('imginterestApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/guestPage/:userId', {
        templateUrl: 'app/guestPage/guestPage.html',
        controller: 'GuestPageCtrl'
      });
  });
