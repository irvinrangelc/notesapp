angular.module("NoteWrangler").config(
	function($routeProvider){
		$routeProvider
			.when('/notes', {
				templateUrl: '/templates/pages/notes/index.html',
				controller: 'NotesIndexController',
				controllerAs: 'NotesIndexCtrl'
			})
			.when('/notes/:noteId', {
				templateUrl: '/templates/pages/notes/show.html',
				controller: 'NotesShowController',
				controllerAs: 'NotesShowCtrl'
			})
			.when('/users', {
				templateUrl: '/templates/pages/users/index.html',
				controller: 'UsersIndexController',
				controllerAs: 'UsersIndexCtrl'
			})
			.when('/users/:userId', {
				templateUrl: '/templates/pages/users/show.html',
				controller:  'UsersShowController',
				controllerAs: 'UsersShowCtrl'
			})
			.when('/', { redirectTo: '/notes'})
			.otherwise({redirectTo: '/notes'});
	}
);