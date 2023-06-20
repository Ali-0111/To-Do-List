import todoList from '../todoList.js';
import saveLocal from '../functions/localStorageFunctions.js';

export default function createReadOnlyInput(obj) {
  const inputElement = document.createElement('input');
  inputElement.readOnly = true;
  inputElement.classList.add('item-text');
  inputElement.id = `input${obj.index}`;

  // conditional class if completed = true
  if (obj.completed) {
    inputElement.classList.add('scratch');
  }
  inputElement.value = obj.description;

  // event for edition and pressing Enter
  inputElement.addEventListener('click', () => {
    inputElement.removeAttribute('readonly');
  });

  inputElement.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      todoList.db[obj.index - 1].description = inputElement.value;
      saveLocal(todoList.db);
      inputElement.setAttribute('readonly', true);
    }
  });

  return inputElement;
}