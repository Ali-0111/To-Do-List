import './style.css';
import list from './modules/todoList.js';
import edit from './modules/editFunctionality.js';
import marked from './modules/remove.js';

window.onload = () => {
  list.show();
  edit.setControlls();
  marked.setControlls();
};

list.enterBtn.onclick = (e) => {
  e.preventDefault();
  list.addTodo();
  list.show();
  edit.setControlls();
  marked.setControlls();
};

list.clearBtn.onclick = () => {
  list.deleteCompleted();
  list.show();
  edit.setControlls();
  marked.setControlls();
};
