angular.module('NoteWrangler')
.controller('NotesIndexController', function($scope, Note) {
  	// Do something with myService

	// Call the service when the server is ready!
	$scope.notes = Note.all();

});