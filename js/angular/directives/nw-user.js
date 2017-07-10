angular.module("NoteWrangler")
	.directive('nwUser', function(){
		return {
			restrict: "E",
			templateUrl: "/templates/directives/nw-user.html",
			scope: {
				// scope '@' means you can pass a string
				// scope '=' two way binding, binds an object
				// scope '&' means ?
				name: "=",
				description: "=",
				image: "="
			}
		};
	});