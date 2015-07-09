'use strict';

describe('Controller: GuestPageCtrl', function () {

  // load the controller's module
  beforeEach(module('imginterestApp'));

  var GuestPageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuestPageCtrl = $controller('GuestPageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
