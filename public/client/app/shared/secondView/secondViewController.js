'use strict';

angular.module('project.secondView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate'])

.controller('secondViewController', ['$scope','projectFactory', '$location',function($scope, projectFactory, $location){
	$scope.carSearchResult;
	$scope.carSearchResultBoolean = true;
	projectFactory.destResult;
	projectFactory.pickUpTimeResult;
	projectFactory.startDateResult;
	projectFactory.endDateResult;
	projectFactory.dropOffTimeResult;
	$scope.carSearchResult = projectFactory.searchResult;

	console.log('secondView: ', projectFactory.destResult);
	console.log('secondView: ', projectFactory.pickUpTimeResult);
	console.log('secondView: ', projectFactory.startDateResult);
	console.log('secondView: ', projectFactory.endDateResult);
	console.log('secondView: ', projectFactory.dropOffTimeResult);
	
	projectFactory.getCar(projectFactory.destResult, projectFactory.startDateResult, projectFactory.endDateResult, projectFactory.pickUpTimeResult, projectFactory.dropOffTimeResult ).then(function(data){ 
			projectFactory.searchResult = data;

			if(!data){
				$scope.carSearchResultBoolean = false;
			}

		});
}]);