todoApp.controller('todoController', [function () {

  var self = this;

  self.list = []

  this.time = new Date();

  self.addToList = function () {
    self.list.push({ title: self.newTodo,
                    done :false});
    self.newTodo = ''
  };

  self.clear = function(){
    self.list = self.list.filter(function(item){
      return !item.done
    })
  };

}]);
