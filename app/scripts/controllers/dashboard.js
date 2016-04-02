'use strict';

/**
 * @ngdoc function
 * @name slnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slnApp
 */
angular.module('slnApp')
  .controller('DashboardCtrl', function ($scope) {
  	$scope.customers = [{"name": "john", "value": "high"}, {"name": "alex", "value": "low"}];

  	$scope.submit = function() {
  		var form_data = $scope.form;
  		var form_file = form_data.customers;
  		console.log(form_file.files);
  	}
  });
