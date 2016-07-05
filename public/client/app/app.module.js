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
			
			if(result.data.Hotwire.StatusDesc === "validation error"){
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
	}
}]);