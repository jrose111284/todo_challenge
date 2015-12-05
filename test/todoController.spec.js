describe('todoController', function() {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('TodoController');
  }));


});
