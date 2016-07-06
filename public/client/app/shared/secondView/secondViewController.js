'use strict';

angular.module('project.secondView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate'])

.controller('secondViewController', ['$scope','projectFactory', function($scope, projectFactory){
	$scope.carSearchResultBoolean = true;
	$scope.carSearchResult;
	
	projectFactory.getCar(projectFactory.destResult[0], projectFactory.startDateResult[0], projectFactory.endDateResult[0], projectFactory.pickUpTimeResult[0], projectFactory.dropOffTimeResult[0] ).then(function(data){ 
			$scope.carSearchResult = data;

			if(!data){
				$scope.carSearchResultBoolean = false;
			}

		});
}]);