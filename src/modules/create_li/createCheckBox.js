import todoList from '../todoList.js';
import saveLocal from '../functions/localStorageFunctions.js';

function lineDescription(obj) {
  // add style to description of todo-item
  const descriptionTodo = document.querySelector(`#input${obj.index}`);
  descriptionTodo.classList.toggle('scratch');
}

function markTrueFalse(obj) {
  todoList.db[obj.index - 1].completed = !todoList.db[obj.index - 1].completed;
}

export default function createCheckbox(obj) {
  const checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.classList.add('check');
  // checked status
  checkboxElement.checked = obj.completed;

  // event for check/ uncheck
  checkboxElement.onclick = () => {
    lineDescription(obj);
    markTrueFalse(obj);
    saveLocal(todoList.db);
  };
  return checkboxElement;
}