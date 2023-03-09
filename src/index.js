import './style.css';
import list from './modules/todoList.js';

list.enterBtn.onclick = (e) => {
  e.preventDefault();
  list.addTodo();
  list.show();
};