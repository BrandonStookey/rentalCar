angular.module('project.services', [])

.factory('projectFactory', ['$http', function($http){
	var destResult = [];
	var pickUpTimeResult = [];
	var startDateResult = [];
	var endDateResult = [];
	var dropOffTimeResult = [];

	var setCarSearchResult = function(dest, pickUpTime, startDate, endDate, dropOffTime){
			destResult[0] = (dest);
			pickUpTimeResult[0] = (pickUpTime);
			startDateResult[0] = (startDate);
			endDateResult[0] = (endDate);
			dropOffTimeResult[0] = (dropOffTime); 
	}
	
	var getCar = function(destResult, startDateResult, endDateResult, pickUpTimeResult, dropOffTimeResult){	
		return $http({
			method: 'GET',
			url: '/getCar/' + destResult + '/' + startDateResult + '/' + endDateResult + '/' + pickUpTimeResult + '/' + dropOffTimeResult,
      transformResponse:function(data) {
      	// http://rabidgadfly.com/2013/02/angular-and-xml-no-problem/
			  // convert the data to JSON and provide
			  // it to the success function below
		    var x2js = new X2JS();
		    var json = x2js.xml_str2json( data );
		    return json;
	   		}
		}).then(function(result) {
			
			if(result.data.Hotwire.StatusDesc === "validation error" || result.data.Hotwire.Result === undefined){
				return false;
			} 

      return result.data.Hotwire.Result.CarResult;
    
    }, function(err) {
      console.error('Post GET error:', err);
    });
	}

	return{
		getCar: getCar,
		setCarSearchResult: setCarSearchResult,
		destResult: destResult,
		pickUpTimeResult: pickUpTimeResult,
		startDateResult: startDateResult,
		endDateResult: endDateResult,
		dropOffTimeResult: dropOffTimeResult,
	}
}]);