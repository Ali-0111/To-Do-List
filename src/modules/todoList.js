class TodoList {
  constructor() {
    this.db = JSON.parse(localStorage.getItem('data')) || [];
    this.bindElements();
  }

  bindElements() {
    this.newTodoInput = document.querySelector('.add-input');
    this.submitMsg = document.querySelector('.submit-warning');

    // the ul
    this.toDoListContainer = document.querySelector('.items');

    // btns
    this.resetBtn = document.querySelector('.restart');
    this.enterBtn = document.querySelector('.enter');
    this.clearBtn = document.querySelector('.clear-btn');
  }
}

const todoList = new TodoList();
export default todoList;