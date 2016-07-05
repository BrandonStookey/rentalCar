'use strict';

angular.module('project.secondView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate'])

.controller('secondViewController', ['$scope','projectFactory', '$location',function($scope, projectFactory, $location){
	$scope.carSearchResult;
	$scope.carSearchResultBoolean = true;
	
	projectFactory.getCar().then(function(data){ 
			$scope.carSearchResult = data;

			if(!data){
				$scope.carSearchResultBoolean = false;
			}

		});
}]);