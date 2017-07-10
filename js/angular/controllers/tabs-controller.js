angular.module("NoteWrangler")
	.controller('TabsController', function($scope){
		$scope.tab = 1;

	    $scope.setTab = function(newValue){
	      $scope.tab = newValue;
	    };

	    $scope.isSet = function(tabName){
	      return $scope.tab === tabName;
	    };
	});