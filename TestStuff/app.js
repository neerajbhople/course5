(function(){
	'use strict';
	angular.module('myFirstApp', [])
	.controller('myFirstController', function($scope){
		$scope.name = "";
		$scope.nameValue = 0;
		$scope.calculateNameValue = function(){
			var nameValue = 0;
  			$scope.nameValue = calculateStringValue($scope.name);
		};
		function calculateStringValue(string) {
  				var totalStringValue = 0;
  				for (var i = 0; i < string.length; i++) {
    				totalStringValue += string.charCodeAt(i);
  				}
  				return totalStringValue;
  		};
	});
})();