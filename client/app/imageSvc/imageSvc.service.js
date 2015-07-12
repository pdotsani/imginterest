'use strict';

angular.module('imginterestApp')
  .service('imageSvc', function ($http, $rootScope) {
    return {
    	saveImage: function(imageUrl, userId, userName) {
    		$http.post('/api/images/', {url: imageUrl, ownerId: userId, owner: userName})
    			.success(function(){
                console.log('image added!');
    		});
    	},
    	deleteImage: function(imgId) {
    		$http.delete('/api/images/'+imgId).success(function(){
                console.log('image deleted!');
                $rootScope.$broadcast('load-images');
                $route.reload();
    		});
    	}
    }
  });
