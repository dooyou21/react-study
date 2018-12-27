export default {
  addTodo(item) {
    let todoList = JSON.parse(localStorage.getItem('REDUX_TODO_DATA')) || [];
    todoList.push(item);
    localStorage.setItem('REDUX_TODO_DATA', JSON.stringify(todoList));
  },
  removeTodo(id) {
    let todoList = JSON.parse(localStorage.getItem('REDUX_TODO_DATA')) || [];
    let newTodoList = [];
    todoList.forEach((item) => {
      if (item.id !== id) {
        newTodoList.push(item);
      }
    });
    localStorage.setItem('REDUX_TODO_DATA', JSON.stringify(newTodoList));
  },
  fetchTodo() {
    return JSON.parse(localStorage.getItem('REDUX_TODO_DATA')) || [];
  },
  toggleTodo(id) {
    let todoList = JSON.parse(localStorage.getItem('REDUX_TODO_DATA'));
    let newTodoList = [];
    todoList.forEach((item) => {
      if (item.id === id) {
        newTodoList.push({
          ...item,
          completed: !item.completed
        });
      } else {
        newTodoList.push(item);
      }
    });
    localStorage.setItem('REDUX_TODO_DATA', JSON.stringify(newTodoList));
  }
}