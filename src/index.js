import './style.css';
import list from './modules/todoList.js';
import saveLocal from './modules/localStorageFunctions.js';
import deleteAllCompleted from './modules/removeAll.js';

window.onload = () => {
  list.createNewItem();
  list.removeOnlyOne();
};

list.enterBtn.onclick = (e) => {
  e.preventDefault();
  list.addTodo();
  list.createNewItem();
  list.removeOnlyOne();
};

list.clearBtn.onclick = () => {
  deleteAllCompleted(list.db);
};

list.resetBtn.onclick = () => {
  list.db = [];
  saveLocal(list.db);
  list.createNewItem();
};
