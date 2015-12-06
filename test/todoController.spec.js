describe('todoController', function () {
  beforeEach(module('toDoList'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('todoController');
  }));

  it('should have no items to start', function () {
    expect(ctrl.list.length).toBe(0);
  });

  it('should add items to the list', function () {
    ctrl.addToList();
    expect(ctrl.list.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    ctrl.clear();
    expect(ctrl.list.length).toBe(0);
  });

  it('should add 2 items to the list', function () {
    ctrl.addToList();
    ctrl.addToList();
    expect(ctrl.list.length).toBe(2);
  });

  it('should add 2 items to the list and remove one', function () {
    ctrl.addToList(2);
    ctrl.clear(0);
    expect(ctrl.list.length).toBe(1);
  });
});
