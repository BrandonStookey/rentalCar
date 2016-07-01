'use strict';

angular.module('project.secondView', [])

.controller('secondViewController', ['$scope','projectFactory', function($scope, projectFactory){
	console.log('I am secondViewController!')
	$scope.carSearchResult;

	// projectFactory.destResult;
	// projectFactory.pickUpTimeResult;
	// projectFactory.startDateResult;
	// projectFactory.endDateResult;
	// projectFactory.dropOffTimeResult;


	projectFactory.getCar().then(function(data){ 
			console.log('secondView data:', data);
			$scope.carSearchResult = data;
		});

}]);