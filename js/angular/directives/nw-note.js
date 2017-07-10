angular.module("NoteWrangler")
	.directive('nwNote', function(){
		return {
			restrict: "E",
			templateUrl: "/templates/directives/nw-note.html",
			scope: {
				// scope '@' means you can pass a string
				// scope '=' two way binding, binds an object
				// scope '&' means ?
				header: "=",
				description: "=",
				background: "@",
				author: "=",
				notecategories: "=",
				created: "="
			}
		};
	});