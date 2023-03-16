import saveLocal from './localStorageFunctions.js';

function edit(array) {
  const items = document.querySelectorAll('.item-text');
  items.forEach((input, index) => {
    input.addEventListener('click', () => {
      input.removeAttribute('readonly');
    });

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        array[index].description = input.value;
        saveLocal(array);
        input.setAttribute('readonly', true);
      }
    });
  });
}

export default edit;