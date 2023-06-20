import todoList from './todoList.js';
import renderItems from './functions/renderItems.js';
import handleNewTodo from './newTodo/handleNewTodo.js';
import saveLocal from './functions/localStorageFunctions.js';
import { deleteAllCompleted } from './functions/deleteAllCompleted.js';
import indexBasedSort from './functions/indexBasedSort.js';

export default function activeTheEvents() {
  const updateStoreUI = () => {
    saveLocal(todoList.db);
    renderItems();
  };

  todoList.resetBtn.onclick = () => {
    todoList.db = [];
    updateStoreUI();
  };

  todoList.enterBtn.onclick = (e) => {
    e.preventDefault();
    handleNewTodo();
    renderItems();
  };

  todoList.clearBtn.onclick = () => {
    deleteAllCompleted();
    indexBasedSort(todoList.db);
    updateStoreUI();
  };
}
