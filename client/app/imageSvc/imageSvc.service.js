'use strict';

angular.module('imginterestApp')
  .service('imageSvc', function ($http) {
    return {
    	saveImage: function(imageUrl, userId) {
    		$http.post('/api/images/', {url: imageUrl, ownerId: userId})
    			.success(function(data){
                    console.log("Image saved to db!");
    		});
    	},
    	deleteImage: function(imgId) {
    		$http.delete('/api/images/'+imgId).success(function(data){
                console.log("Image deleted from db!");
    		})
    	}
    }
  });
