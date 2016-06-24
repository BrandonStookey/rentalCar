'use strict';

angular.module('project.homeView', [])

.controller('homeViewController', ['$scope','projectFactory', function($scope, projectFactory){
	projectFactory.getCar();
	console.log('I am homeViewController!');


}]);