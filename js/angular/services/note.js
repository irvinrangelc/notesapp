angular.module('NoteWrangler')
.factory('Note', ['$http', function NoteFactory($http) {
  var arrayNotes = [
    {
      "id": 1,
      "header": "Front-end Frameworks",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 12, 2017",
      "author": "Irvin Rangel",
      "category": [
        { "id": 1, "name": "Front-End" },
        { "id": 1, "name": "Back-End" },
        { "id": 1, "name": "Javascript" }
      ]
    },
    {
      "id": 2,
      "header": "Laravel Framework",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2014",
      "author": "Irvin Rangel",
      "category": [{ "id": 2, "name": "Back-End" }]
    },
    {
      "id": 3,
      "header": "Sample note post about Marketing",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "February 1, 2015",
      "author": "Irvin Rangel",
      "category": [{ "id": 5, "name": "Marketing" }]
    },
    {
      "id": 4,
      "header": "IONIC Framework",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2014",
      "author": "Irvin Rangel",
      "category": [{ "id": 6, "name": "Mobile Development" }]
    },
    {
      "id": 5,
      "header": "UI/UX Principles",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2014",
      "author": "Irvin Rangel",
      "category": [{ "id": 4, "name": "UI/UX" }]
    },
    {
      "id": 6,
      "header": "Principles of GIT",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2016",
      "author": "Irvin Rangel",
      "category": [{ "id": 8, "name": "Git" }]
    },
    {
      "id": 7,
      "header": "AWS & Heroku",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2014",
      "author": "Irvin Rangel",
      "category": [{ "id": 9, "name": "Cloud Computing" }]
    },
    {
      "id": 8,
      "header": "Java & Spring",
      "description": "This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.",
      "createdOn": "January 1, 2014",
      "author": "Irvin Rangel",
      "category": [{ "id": 7, "name": "Java" }]
    }
  ];

  return {
    all: function() {
      //return $http({method: 'GET', url: "/notes"});
      return arrayNotes;
    },
    find: function(id){
      return $http({method:'GET', url: '/notes/' + id});
    },
    update: function(noteObj) {
      return $http({method: 'PUT', url: '/notes', data: noteObj});
    },
    create: function(noteObj) {
      return $http({method: 'POST', url: '/notes', data: noteObj});
    }
  };
}]);