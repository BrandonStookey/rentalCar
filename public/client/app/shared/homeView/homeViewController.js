'use strict';

angular.module('project.homeView', [])

.controller('homeViewController', ['$scope','projectFactory', function($scope, projectFactory){
	projectFactory.getCar();
	console.log('I am homeViewController!');

	$scope.catchDetails = function(dest, startDate, endDate, pickUpTime, dropOffTime){

		//======================================User Selects Pick Up Time
		var pickUpTimeMinutes = pickUpTime.getMinutes();
		var pickUpTimeHour = pickUpTime.getHours();
		var pickUpTimeResult;

		pickUpTimeHour = pickUpTimeHour < 10 ? '0'+ pickUpTimeHour : pickUpTimeHour;
		
		pickUpTimeMinutes = pickUpTimeMinutes < 10 ? '0'+ pickUpTimeMinutes : pickUpTimeMinutes;
		
		pickUpTimeResult = pickUpTimeHour + ":" + pickUpTimeMinutes;
		console.log('pickUpTimeResult: ', pickUpTimeResult);

		//=======================================User Selects Pick Up date

		var startDateMonth = startDate.getMonth() + 1 
		var startDateDay = startDate.getDate()
		var startDateResult; 

		startDateMonth = startDateMonth < 10 ? '0'+ startDateMonth : startDateMonth;
		
		startDateDay = startDateDay < 10 ? '0'+ startDateDay : startDateDay;

		startDateResult = startDateMonth + "/" + startDateDay + "/" + startDate.getFullYear();

		console.log('startDateResult: ', startDateResult);

		//=====================================User Selects Drop Off Time
		var dropOffTimeMinutes = dropOffTime.getMinutes();
		var dropOffTimeHour = dropOffTime.getHours();
		var dropOffTimeResult;

		dropOffTimeHour = dropOffTimeHour < 10 ? '0'+ dropOffTimeHour : dropOffTimeHour;
		dropOffTimeMinutes = dropOffTimeMinutes < 10 ? '0'+ dropOffTimeMinutes : dropOffTimeMinutes;

		dropOffTimeResult = dropOffTimeHour + ":" + dropOffTimeMinutes
		
		console.log('dropOffTimeResult: ',	dropOffTimeResult);

		//=======================================User Selects Drop Off Date

		var endDateMonth = endDate.getMonth() + 1 
		var endDateDay = endDate.getDate()
		var endDateResult;

		endDateMonth = endDateMonth < 10 ? '0'+ endDateMonth : endDateMonth;
		endDateDay = endDateDay < 10 ? '0'+ endDateDay : endDateDay;

		endDateResult = endDateMonth + "/" + endDateDay + "/" + endDate.getFullYear();

		console.log('endDate: ', endDateResult);
	}
}]);