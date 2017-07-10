angular.module('NoteWrangler')
.factory('User', ['$http', function UserFactory($http) {

  var users = [
    {
      "name": "Irvin Rangel",
      "email": "osmopk@gmail.com",
      "description": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna."
    }
  ];

  return {
    all: function() {
      //return $http({method: 'GET', url: "/users"});
      return users;
    },
    find: function(id){
      return $http({method:'GET', url: '/users/' + id});
    },
    update: function(userObj) {
      return $http({method: 'PUT', url: '/users', data: userObj});
    },
    create: function(userObj) {
      return $http({method: 'POST', url: '/users', data: userObj});
    }
  };
}]);