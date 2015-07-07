'use strict';

describe('Service: imageSvc', function () {

  // load the service's module
  beforeEach(module('imginterestApp'));

  // instantiate service
  var imageSvc;
  beforeEach(inject(function (_imageSvc_) {
    imageSvc = _imageSvc_;
  }));

  it('should do something', function () {
    expect(!!imageSvc).toBe(true);
  });

});
