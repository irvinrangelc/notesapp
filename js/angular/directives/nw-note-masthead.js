angular.module("NoteWrangler")
	.directive('nwMasthead', function(){
		return {
			restrict: "E",
			templateUrl: "/templates/directives/nw-masthead.html",
			scope: {
				// scope '@' means you can pass a string
				// scope '=' two way binding, binds an object
				// scope '&' means ?
			},
			controller: "TabsController",
		};
	});