'use strict';

angular.module('project.homeView', [])

.controller('homeViewController', ['$scope','projectFactory', function($scope, projectFactory){
	console.log('I am homeViewController!');
	
	$scope.pickUpTimeResult;
	$scope.startDateResult;
	$scope.dropOffTimeResult;
	$scope.endDateResult;	
	$scope.destination;

	$scope.catchDetails = function(dest, startDate, endDate, pickUpTime, dropOffTime){

		//======================================User Selects Pick Up Time
		var pickUpTimeMinutes = pickUpTime.getMinutes();
		var pickUpTimeHour = pickUpTime.getHours();
		$scope.destination = dest;

		// pickUpTimeHour = pickUpTimeHour < 10 ? '0'+ pickUpTimeHour : pickUpTimeHour;
		
		pickUpTimeMinutes = pickUpTimeMinutes < 10 ? '0'+ pickUpTimeMinutes : pickUpTimeMinutes;
		
		$scope.pickUpTimeResult = pickUpTimeHour + ":" + pickUpTimeMinutes;
		console.log('pickUpTimeResult: ', $scope.pickUpTimeResult);

		//=======================================User Selects Pick Up date

		var startDateMonth = startDate.getMonth() + 1;
		var startDateDay = startDate.getDate(); 

		startDateMonth = startDateMonth < 10 ? '0'+ startDateMonth : startDateMonth;
		
		startDateDay = startDateDay < 10 ? '0'+ startDateDay : startDateDay;

		$scope.startDateResult = startDateMonth + "/" + startDateDay + "/" + startDate.getFullYear();

		console.log('startDateResult: ', $scope.startDateResult);

		//=====================================User Selects Drop Off Time
		var dropOffTimeMinutes = dropOffTime.getMinutes();
		var dropOffTimeHour = dropOffTime.getHours();

		// dropOffTimeHour = dropOffTimeHour < 10 ? '0'+ dropOffTimeHour : dropOffTimeHour;
		dropOffTimeMinutes = dropOffTimeMinutes < 10 ? '0'+ dropOffTimeMinutes : dropOffTimeMinutes;

		$scope.dropOffTimeResult = dropOffTimeHour + ":" + dropOffTimeMinutes;
		
		console.log('dropOffTimeResult: ',	$scope.dropOffTimeResult);

		//=======================================User Selects Drop Off Date

		var endDateMonth = endDate.getMonth() + 1 
		var endDateDay = endDate.getDate()

		endDateMonth = endDateMonth < 10 ? '0'+ endDateMonth : endDateMonth;
		endDateDay = endDateDay < 10 ? '0'+ endDateDay : endDateDay;

		$scope.endDateResult = endDateMonth + "/" + endDateDay + "/" + endDate.getFullYear();

		console.log('endDate: ', $scope.endDateResult);

		projectFactory.getCar($scope.destination, $scope.pickUpTimeResult, $scope.startDateResult, $scope.endDateResult, $scope.dropOffTimeResult).then(function(data){ console.log(data)});
		}
}]);


















