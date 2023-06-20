import indexBasedSort from './indexBasedSort.js';
import saveLocal from './localStorageFunctions.js';
import todoList from '../todoList.js';

export function deleteAllCompleted() {
  todoList.db = todoList.db.filter((task) => !task.completed);
}

// sort , save , render
export default function handleDelete(renderItems) {
  indexBasedSort(todoList.db);
  saveLocal(todoList.db);
  renderItems();
}