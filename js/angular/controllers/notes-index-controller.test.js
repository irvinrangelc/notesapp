describe('NotesIndexController', function() {

  beforeEach(module('NoteWrangler'));

  it('should create a `Notes` model with 8 notes', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('NotesIndexController', {$scope: scope});

    expect(scope.notes.length).toBe(8);
  }));

});