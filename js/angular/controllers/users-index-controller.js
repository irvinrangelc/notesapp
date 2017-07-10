angular.module("NoteWrangler")
	.controller('UsersIndexController', function($scope, $routeParams, User, Gravatar){
		// Returns the Gravatar Url using a provider
		$scope.gravatarUrl = function(email){
			return Gravatar(email);
		};

		$scope.users = User.all();
	});