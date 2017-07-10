angular.module("NoteWrangler", ['ngRoute'])
	// We can declare configurations using "Providers" 
	// in this case my GravatarProvider
	.config(['GravatarProvider', function(GravatarProvider){
		GravatarProvider.setSize(100);
	}]);