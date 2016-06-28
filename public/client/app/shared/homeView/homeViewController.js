'use strict';

angular.module('project.homeView', [])

.controller('homeViewController', ['$scope','projectFactory', function($scope, projectFactory){
	projectFactory.getCar();
	console.log('I am homeViewController!');

	$scope.catchDetails = function(dest, startDate, endDate, pickUpTime, dropOffTime){

		//======================================User Selects Pick Up Time
		var pickUpTimeMinutes = pickUpTime.getMinutes();
		var pickUpTimeHour = pickUpTime.getHours();

		pickUpTimeHour = pickUpTimeHour < 10 ? '0'+ pickUpTimeHour : pickUpTimeHour;
		pickUpTimeMinutes = pickUpTimeMinutes < 10 ? '0'+ pickUpTimeMinutes : pickUpTimeMinutes;
		
		console.log('pickUpTime: ', pickUpTimeHour + ":" + pickUpTimeMinutes);

		//=======================================User Selects Pick Up date

		var startDateMonth = startDate.getMonth() + 1 
		var startDateDay = startDate.getDate()

		startDateMonth = startDateMonth < 10 ? '0'+ startDateMonth : startDateMonth;
		startDateDay = startDateDay < 10 ? '0'+ startDateDay : startDateDay;

		console.log('pickUpDate: ', startDateMonth + "/" + startDateDay + "/" + startDate.getFullYear());

		//=====================================User Selects Drop Off Time
		var dropOffTimeMinutes = dropOffTime.getMinutes();
		var dropOffTimeHour = dropOffTime.getHours();

		dropOffTimeHour = dropOffTimeHour < 10 ? '0'+ dropOffTimeHour : dropOffTimeHour;
		dropOffTimeMinutes = dropOffTimeMinutes < 10 ? '0'+ dropOffTimeMinutes : dropOffTimeMinutes;
		
		console.log('dropOffTime: ',	dropOffTimeHour + ":" + dropOffTimeMinutes);

		//=======================================User Selects Drop Off Date

		var endDateMonth = endDate.getMonth() + 1 
		var endDateDay = endDate.getDate()

		endDateMonth = endDateMonth < 10 ? '0'+ endDateMonth : endDateMonth;
		endDateDay = endDateDay < 10 ? '0'+ endDateDay : endDateDay;

		console.log('endDate: ', endDateMonth + "/" + endDateDay + "/" + endDate.getFullYear());


	}
}]);