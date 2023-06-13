import './style.css';
import todoList from './modules/todoList.js';
import saveLocal from './modules/localStorageFunctions.js';

window.onload = () => {
  todoList.renderItems();
};

todoList.enterBtn.onclick = (e) => {
  e.preventDefault();
  todoList.handleNewTodo();
  todoList.renderItems();
};

todoList.clearBtn.onclick = () => {
  todoList.deleteCompleted();
  todoList.handleDelete();
};

todoList.resetBtn.onclick = () => {
  todoList.db = [];
  saveLocal(todoList.db);
  todoList.renderItems();
};
