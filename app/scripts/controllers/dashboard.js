'use strict';

/**
 * @ngdoc function
 * @name slnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the slnApp
 */
angular.module('slnApp')
  .controller('DashboardCtrl', function ($scope, $http) {
  	$scope.valid_customers = [];

  	function loadHandler(event) {
  		var csv = event.target.result;
  		csv = csv.split('\n');
  		// var index;
  		// for (index = 0; index < csv.length; index++)
  		// {
  		// 	csv[index].replace("\n","");
  		// }
  		// csv = ["SIRAGUSA PETER C 3RD"]
  		console.log(csv);
  		$http.post('http://localhost:3000/users', csv)
  		.then(function(response) {
  			console.log(response.data[0].OWNER);
         $scope.valid_customers = response.data;
        }, function(response) {
          console.log('failed to post your data');
        });
  	}

  	$scope.submit = function() {
  		var form_data = $scope.form;
  		var form_file = form_data.customers;
  		var reader = new FileReader();
  		reader.readAsText(form_file);
  		reader.onload = loadHandler;
  	}
  });
