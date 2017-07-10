angular.module("NoteWrangler")
	.controller('NotesShowController', function($http, $routeParams){
		var controller = this;

		/* 
			Call the Service and API 
			method: GET
			params: :noteId
			returns: A note
		*/
		
		/*
		$http({ method: 'GET', url: '/notes/' + $routeParams.noteId })
			.success(function(data) {
				controller.note = data;
			})
			.catch(function(data){
				controller.note.error = data.error;
			});
		*/
		
	});