'use strict';

describe('Controller: AllUsersCtrl', function () {

  // load the controller's module
  beforeEach(module('imginterestApp'));

  var AllUsersCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllUsersCtrl = $controller('AllUsersCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
