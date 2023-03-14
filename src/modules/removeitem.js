/*eslint-disbale no-restricted-globals */
import saveLocal from './localStorageFunctions.js';

function removeitem(array) {
  const moreBtns = document.querySelectorAll('.moreBtn');
  moreBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      array = array.filter((element, i) => i !== index);
      saveLocal(array);
      location.reload();
    });
  });
}

export default removeitem;
/*eslint-disbale no-restricted-globals */
