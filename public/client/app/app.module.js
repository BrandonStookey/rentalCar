angular.module('project.services', [])

.factory('projectFactory', ['$http', function($http){
	var destResult;
	var pickUpTimeResult;
	var startDateResult;
	var endDateResult;
	var dropOffTimeResult;

	var setCarSearchResult = function(dest, pickUpTime, startDate, endDate, dropOffTime){
			destResult = dest;
			pickUpTimeResult = pickUpTime;
			startDateResult = startDate;
			endDateResult = endDate;
			dropOffTimeResult = dropOffTime; 
	}
	
	var getCar = function(){
		console.log('Inside of getCar dude!');

		console.log('http://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8&dest=' + destResult +'&startdate='+ startDateResult + '&enddate='+ endDateResult +'&pickuptime='+ pickUpTimeResult + '&dropofftime='+ dropOffTimeResult)
		
		return $http({
			method: 'GET',
			url: 'http://api.hotwire.com/v1/search/car?apikey=qqvyj5fw2sbye5upjv7pu6c8&dest=' + destResult +'&startdate='+ startDateResult + '&enddate='+ endDateResult +'&pickuptime='+ pickUpTimeResult + '&dropofftime='+ dropOffTimeResult,
      transformResponse:function(data) {
      	// http://rabidgadfly.com/2013/02/angular-and-xml-no-problem/
			  // convert the data to JSON and provide
			  // it to the success function below
		    var x2js = new X2JS();
		    var json = x2js.xml_str2json( data );
		    return json;
	   		}
		}).then(function(result) {

			console.log('results: ', result.data.Hotwire.Result.CarResult);
			// console.log('results: ', result);

      return result.data.Hotwire.Result.CarResult;
      // return result;
    }, function(err) {
    	console.log('HELLO ERROR!');
      console.error('Post GET error:', err);
    });
	}

	return{
		getCar: getCar,
		setCarSearchResult: setCarSearchResult
	}
}]);