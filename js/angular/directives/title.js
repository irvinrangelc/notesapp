angular.module("NoteWrangler")
	.directive('title', ['$timeout', function($timeout){
		// Injecting $timeout to be able to load the content
		// passed as parameter to tooltip
		return function(scope, element){
			$timeout(function(){
				// Append custom tooltip here,
				// I needed to wrap the element using JQuery syntax $(element)
				// I read this solution on the forums
				$(element).tooltip({ container: "body" });
			});

			scope.$on('$destroy', function(){
				$(element).tooltip('destroy');
			});
		};

	}]);