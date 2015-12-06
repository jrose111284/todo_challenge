describe('Todo list', function() {
  beforeEach(function(){
      browser.get('http://localhost:8080');
  })

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Todo');
  });
});

describe('will add a todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    element(by.model('toDoList.newTodo')).sendKeys('get milk, bread and cheese');
    element(by.css('[id="submit"]')).click();

    var todoList = element.all(by.repeater('todo in toDoList.list'));
    expect(todoList.count()).toEqual(1);
    expect(todoList.get(0).getText()).toEqual('get milk, bread and cheese');
  });
});

describe('will remove a todo list', function() {
  it('should remove a todo', function() {
    browser.get('http://localhost:8080');

    element(by.model('toDoList.newTodo')).sendKeys('get milk, bread and cheese');
    element(by.css('[id="clear"]')).click();
    var todoList = element.all(by.repeater('todo in toDoList.list'));
    expect(todoList.count()).toEqual(0);


  });
});
