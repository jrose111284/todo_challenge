todoApp.controller('todoController', [function () {

  var self = this;

  self.list = []


  self.addToList = function () {
    self.list.push({'title': self.newTodo,
                    'done':false});
    self.newTodo = ''
  };


  self.clear = function(){
    self.list = self.list.filter(function(item){
      return !item.done
    })
  }

}]);
