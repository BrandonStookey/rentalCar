'use strict';

angular.module('project.homeView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate','ngAutocomplete'])

.controller('homeViewController', ['$scope','projectFactory', function($scope, projectFactory){

//============================Time Selector
	$scope.pickUpTime;
	$scope.dropOffTime;
  $scope.hstep = 1;
  $scope.mstep = 30;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.init = function(){

		 	$scope.updatePickUpTime = function() {
		    var d = new Date();
		    d.setHours( 14 );
		    d.setMinutes( 0 );
		    $scope.pickUpTime = d;
		  };

		 	$scope.updateDropOffTime = function() {
		    var d = new Date();
		    d.setHours( 14 );
		    d.setMinutes( 0 );
		    $scope.dropOffTime = d;
		  };

//============================Date Selector

		$scope.today = function() {
		    $scope.startDate = new Date();
		    $scope.endDate = new Date();
		  };
		$scope.today();

	  $scope.inlineOptions = {
	    customClass: getDayClass,
	    minDate: new Date(),
	    showWeeks: true
	  };

	  $scope.dateOptions = {
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	  };

	  $scope.toggleMin = function() {
	    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
	    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
	  };

	  $scope.open1 = function() {
	    $scope.popup1.opened = true;
	  };

	  $scope.open2 = function() {
	    $scope.popup2.opened = true;
	  };

	  $scope.setDate = function(year, month, day) {
	    $scope.startDate = new Date(year, month, day);
	    $scope.endDate = new Date(year, month, day);
	  };

	  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
	  $scope.format = $scope.formats[0];
	  $scope.altInputFormats = ['M!/d!/yyyy'];

	  $scope.popup1 = {
	    opened: false
	  };

	  $scope.popup2 = {
	    opened: false
	  };

	  var tomorrow = new Date();
	  tomorrow.setDate(tomorrow.getDate() + 1);
	  var afterTomorrow = new Date();
	  afterTomorrow.setDate(tomorrow.getDate() + 1);
	  $scope.events = [
	    {
	      date: tomorrow,
	      status: 'full'
	    },
	    {
	      date: afterTomorrow,
	      status: 'partially'
	    }
	  ];

	  function getDayClass(data) {
	    var date = data.date,
	      mode = data.mode;
	    if (mode === 'day') {
	      var dayToCheck = new Date(date).setHours(0,0,0,0);

	      for (var i = 0; i < $scope.events.length; i++) {
	        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

	        if (dayToCheck === currentDay) {
	          return $scope.events[i].status;
	        }
	      }
	    }

	    return '';
	  }	
	  
	  //=================toggleMin needs to be invoked twice, it keeps users from selecting a date before the current day 
  	$scope.toggleMin();
  	$scope.toggleMin();
	 	$scope.updatePickUpTime();
	 	$scope.updateDropOffTime();
	}

	$scope.init();
//==============catchDetails, catches users selections and then passes it to projectFactory, then when the view changes, a REST API request is sent with the user's selected information
	
	$scope.catchDetails = function(dest, startDate, endDate, pickUpTime, dropOffTime){
		var pickUpTimeMinutes = pickUpTime.getMinutes();
		var pickUpTimeHour = pickUpTime.getHours();
		var destination = dest;
		var pickUpTimeResult;
		var startDateResult;
		var dropOffTimeResult;
		var endDateResult;	
		var destination;
		
		//======================================User Selects Pick Up Time
		pickUpTimeMinutes = pickUpTimeMinutes < 10 ? '0'+ pickUpTimeMinutes : pickUpTimeMinutes;
		
		pickUpTimeResult = pickUpTimeHour + ":" + pickUpTimeMinutes;

		//=======================================User Selects Pick Up date
		var startDateMonth = startDate.getMonth() + 1;
		var startDateDay = startDate.getDate(); 

		startDateMonth = startDateMonth < 10 ? '0'+ startDateMonth : startDateMonth;
		
		startDateDay = startDateDay < 10 ? '0'+ startDateDay : startDateDay;

		startDateResult = startDateMonth + "/" + startDateDay + "/" + startDate.getFullYear();

		//=====================================User Selects Drop Off Time
		var dropOffTimeMinutes = dropOffTime.getMinutes();
		var dropOffTimeHour = dropOffTime.getHours();

		dropOffTimeMinutes = dropOffTimeMinutes < 10 ? '0'+ dropOffTimeMinutes : dropOffTimeMinutes;

		dropOffTimeResult = dropOffTimeHour + ":" + dropOffTimeMinutes;
	
		//=======================================User Selects Drop Off Date
		var endDateMonth = endDate.getMonth() + 1 
		var endDateDay = endDate.getDate()

		endDateMonth = endDateMonth < 10 ? '0'+ endDateMonth : endDateMonth;
		endDateDay = endDateDay < 10 ? '0'+ endDateDay : endDateDay;

		endDateResult = endDateMonth + "/" + endDateDay + "/" + endDate.getFullYear();

		projectFactory.setCarSearchResult(destination, pickUpTimeResult, startDateResult, endDateResult, dropOffTimeResult);
	}
}]);