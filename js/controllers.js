'use strict';

/* Controllers */
var app = angular.module('use-info', []);

  app.controller('MainCtrl', function($scope){
    $scope.useitem=usearray;
    $scope.setModal=function(number){
      $scope.modalSelected=usearray[number-1];
    };
  });

