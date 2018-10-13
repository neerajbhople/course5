(function(){
/*	'use strict';
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
	});*/

	'use strict';
	angular.module('LunchCheck',[])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		
		$scope.checkLunch = function (){
			var lunchitems = $scope.lunchitems;
			
			if(checkLunchCount(lunchitems)===0)
				$scope.message = "Please enter data first!";
			else if (checkLunchCount(lunchitems)<=3)
				$scope.message = "Enjoy!"
			else
				$scope.message = "Too much!"

		};
		function checkLunchCount(lunchitems){
			    var count = 0;
			    if (lunchitems) {
			      var array = lunchitems.split(',');
			      for (var idx in array) {
			        if (array[idx].trim().length != 0) {
			          count++;
			        }
			      }
			    }
    			return count;
		};
	}
})();