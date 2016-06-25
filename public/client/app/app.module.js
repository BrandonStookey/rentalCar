angular.module('project.services', [])

.factory('projectFactory', ['$http', function($http){

	var getCar = function(){
		console.log('Inside of getCar dude!');
		return $http({
			method: 'GET',
			url: 'http://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8',
			// url: 'https://www.reddit.com/.json',
			// url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=93b03ba103c6cabec96f47a6f650769e',
			// headers: {
   //          'Access-Control-Allow-Origin': 'http://localhost:8080',
   //    },
		}).then(function(result) {
			console.log('results: ', result);
      return result.data;
    }, function(err) {
    	console.log('HELLO ERROR!');
      console.error('Post GET error:', err);
    });
	}

	return{
		getCar: getCar,
	}
}]);