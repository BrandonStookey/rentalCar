'use strict';

angular.module('project.secondView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate'])

.controller('secondViewController', ['$scope','projectFactory', '$location',function($scope, projectFactory, $location){
	$scope.carSearchResult;

	projectFactory.getCar().then(function(data){ 
			console.log('secondView data:', data);
			$scope.carSearchResult = data;
			console.log('$scope.carSearchResult: ', $scope.carSearchResult);
			if(!$scope.carSearchResult){
				$location.path('/homeView');
			}
		});
}]);