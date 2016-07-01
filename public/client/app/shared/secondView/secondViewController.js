'use strict';

angular.module('project.secondView', ['ui.bootstrap'])

.controller('secondViewController', ['$scope','projectFactory', function($scope, projectFactory){
	console.log('I am secondViewController!')
	$scope.carSearchResult;


	projectFactory.getCar().then(function(data){ 
			console.log('secondView data:', data);
			$scope.carSearchResult = data;
			console.log('$scope.carSearchResult: ', $scope.carSearchResult);
		});

}]);