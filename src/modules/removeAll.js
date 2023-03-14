/* eslint-disable no-restricted-globals */
import saveLocal from './localStorageFunctions.js';

function deleteCompleted(array) {
  array = array.filter((task) => !task.completed);
  saveLocal(array);
  location.reload();
}

export default deleteCompleted;
/* eslint-disable no-restricted-globals */