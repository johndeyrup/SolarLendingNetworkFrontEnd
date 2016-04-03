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
  		var new_csv = []
  		// console.log(typeof csv);
  		csv = ["COMMWLTH OF", "GREALISH MARTIN", "EAGLE PROPERTY", "GREALISH MARTIN", "CITY OF", "LIU SHIK-CHUN", "LIU PI-YAO", "TWELVE 14", "LYDON ANN", "MCGOVERN DENNIS", "HURWITCH SANDRA", "RUFO JOSEPH", "SIRAGUSA PETER", "KAPILIAN RALPH", "GALVIN WILLIAM", "SZABO DEREK", "HERNANDEZ CLAIRE", "MARTIN ANDREW", "STELLA ANNA", "YUEN JOSEPH", "PARASIRAKIS PETER", "YEE RAYMOND", "LEE BING", "LUKE KENNETH", "WONG TERRANCE", "WONG SHUCK", "ELLEN GIFFORD", "YEE DENNIS", "CHESTNUT HILL", "CITY OF", "BOURQUE CANDICE", "MATAR NUHAD", "GURDZIEL KATHERINE", "CHAN BRYAN", "ANTONELLIS COSTANZO", "SUTLIFF STEPHEN", "KUPERSHMIDT USHER", "KULAS JAMES", "RUFFINO LISA", "MISHKIN LINDA", "TWELVE KENRICK", "MILLMAN IRA", "GOODE STEVEN", "WONG DONNA", "LEE ALAN", "BARONE SALVATORE", "HALLORAN LAURA", "KENDALL ERNEST", "WU SILAS", "DOBBRATZ MARY", "MCNAMARA ROBERT", "HARRIGAN JEREMIAH", "SACCHETTI DIANE", "KILBRIDE SANDRA", "JONES GREGG", "EIGHTY-82 KENRICK", "LIU DAVID", "TYPADIS ARCHIE", "DARIDES NICK", "KIRSHENBAUM FOSTER", "KIRSHENBAUM FOSTER", "TSIRULNIK BORIS", "YANKOVSKI EDWARD", "BABAIAN WILLIAM", "KABAKOW SARAH", "LEE YUEN", "BLACKBURN MARY", "CHALMERS JAMES", "TAWA MICHELINA", "ASHFORD NICHOLAS", "SPARACO JOHN", "HAROULES RUTH", "ARONCHIK BORIS", "LUKE KENNETH", "YEE ", "SIMMONS GLORIA", "MINIHANE JANET", "GREALISH MARGARET", "GREALISH MARGARET", "YEE WILLIAM", "LOMASNEY IDA", "LYDON MICHAEL", "ALFORD DAVID", "GALVIN WILLIAM", "KIRSHENBAUM-FOSTER MIRA", "STEVENSON RICHARD", "ROGERS JOANNE", "FENTON JOHN", "HUGHES JAMES", "WIZNITZER PAUL", "CORBETT LINDA", "HEIMAN JAMES", "HADDAD MAURICE", "SINGAL BRUCE", "MCKAY YVONNE", "MCKAY KRISTINA", "NINETY6 UNDINE", "LEUNG WANDA", "MATTHEW S", "SIXTY-4 LAKE"];
  		// console.log(typeof csv);
  		// csv = ['WIZNITZER PAUL', 'LYDON MICHAEL' ]
  		// var test_csv = ["COMMWLTH OF", "GREALISH MARTIN", "EAGLE PROPERTY", "GREALISH MARTIN", "CITY OF", "LIU SHIK-CHUN"];
  		// var index;
  		// for (index = 0; index < csv.length; index++)
  		// {
  		// 	new_csv.push(csv[index]);
  		// }
  		// csv = ["SIRAGUSA PETER C 3RD"]
  		$http.post('http://localhost:3000/users', csv)
  		.then(function(response) {
  			console.log(response.data);
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
