angular.module('project.services', [])

.factory('projectFactory', ['$http', function($http){

	var getCar = function(){
		console.log('Inside of getCar dude!');
		return $http({
			method: 'GET',
			url: 'http://api.hotwire.com/v1/search/car',
			headers: {
           'Access-Control-Allow-Origin': 'http://url:8080',
      },
		}).then(function(result) {
			console.log('results: ', result);
      return result.data;
    }, function(err) {
    	console.log('HELLO ERROR!');
      console.error('Post GET error:', err);
    });
	}

	return{
		getCar: getCar
	}
}]);