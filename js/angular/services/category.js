angular.module('NoteWrangler')
.factory('Category', ['$http', function CategoryFactory($http) {

  var categories = [
    {
      "id": 1,
      "name": "Front-End",
      "count": 0
    },
    {
      "id": 2,
      "name": "Back-End",
      "count": 0
    },
    {
      "id": 3,
      "name": "Javascript",
      "count": 0
    },
    {
      "id": 4,
      "name": "UI/UX",
      "count": 0
    },
    {
      "id": 5,
      "name": "Marketing",
      "count": 0
    },
    {
      "id": 6,
      "name": "Mobile Development",
      "count": 0
    },
    {
      "id": 7,
      "name": "Java",
      "count": 0
    },
    {
      "id": 8,
      "name": "Git",
      "count": 0
    },
    {
      "id": 9,
      "name": "Cloud Computing",
      "count": 0
    }
  ];

  return {
    all: function() {
      //return $http({method: 'GET', url: "/categories"});
      return categories;
    },
    find: function(id){
      return $http({method:'GET', url: '/categories/' + id});
    },
    update: function(categoryObj) {
      return $http({method: 'PUT', url: '/categories', data: categoryObj});
    },
    create: function(categoryObj) {
      return $http({method: 'POST', url: '/categories', data: categoryObj});
    }
  };
}]);