'use strict';

/* Controllers */
var app_c=angular.module('appControllers', []);

app.controller('MainCtrl', function($scope){
	$scope.useitem=usearray;
	$scope.setModal=function(number){
		$scope.modalSelected=usearray[number-1];
	};
});

