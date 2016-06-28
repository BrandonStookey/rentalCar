angular.module('project.services', [])

.factory('projectFactory', ['$http', function($http){

	var getCar = function(dest, startDate, endDate, pickUpTime, dropOffTime){
		console.log('Inside of getCar dude!');
		return $http({
			method: 'GET',
			url: 'http://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8&dest=' + dest +'&startdate='+ startDate + '&enddate='+ endDate +'&pickuptime='+ pickUpTime + '&dropofftime='+ dropOffTime ,
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