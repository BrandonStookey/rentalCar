'use strict';

angular.module('project.secondView', ['ui.bootstrap','angular-loading-bar', 'ngAnimate'])

.controller('secondViewController', ['$scope','projectFactory', '$location',function($scope, projectFactory, $location){
	console.log('I am secondViewController!')
	$scope.carSearchResult;

	projectFactory.getCar().then(function(data){ 
			console.log('secondView data:', data);
			$scope.carSearchResult = data;
			console.log('$scope.carSearchResult: ', $scope.carSearchResult);
			if(!$scope.carSearchResult){
				console.log('Go Home!');
				$location.path('/homeView');
			}
		});

}]);