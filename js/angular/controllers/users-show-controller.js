angular.module("NoteWrangler")
	.controller('UsersShowController', function($http, $routeParams){
		var controller = this;

		/* 
			Call the Service and API 
			method: GET
			params: :userId
			returns: A User
		*/
		
		/*
		$http({ method: 'GET', url: '/users/' + $routeParams.userId })
			.success(function(data) {
				controller.user = data;
			})
			.catch(function(data){
				controller.user.error = data.error;
			});
		*/
		
	});