describe('Todo list', function() {

  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    element(by.model('toDoList.newTodo')).sendKeys('write first protractor test');
    element(by.css('[id=totalcount]')).click();

    var todoList = element.all(by.repeater('todo in toDoList.list'));
    expect(toDoList.addToList()).toEqual(0);

  });
});
