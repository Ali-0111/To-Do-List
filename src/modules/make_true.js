import saveLocal from './localStorageFunctions.js';

function makeTrue(array, i) {
  const description = document.querySelectorAll('.item-text');
  description[i].classList.toggle('scratch');
  array[i].completed = !array[i].completed;
  saveLocal(array);
}

function grabCheckBoxes(arr) {
  const checkBoxes = document.querySelectorAll('.check');

  checkBoxes.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      makeTrue(arr, index);
    });
  });
}

export default grabCheckBoxes;