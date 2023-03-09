import './style.css';
<<<<<<< HEAD
import list from './modules/todoList.js';
import marked from './modules/remove.js';

window.onload = () => {
  list.show();
  marked.setControlls();
};

list.enterBtn.onclick = (e) => {
  e.preventDefault();
  list.addTodo();
  list.show();
  marked.setControlls();
};

list.clearBtn.onclick = () => {
  list.deleteCompleted();
  list.show();
  marked.setControlls();
=======

const items = document.querySelector('.items');

const data = [
  {
    description: 'Buying Book',
    completed: false,
    index: 2,
  },

  {
    description: 'Coding with Partner',
    completed: false,
    index: 3,
  },

  {

    description: 'Reading Book',
    completed: false,
    index: 1,
  },

];

function show() {
  // sort the array of objects by index

  const sortedlist = data.sort((a, b) => a.index - b.index);

  items.innerHTML = sortedlist.map((element) => (`
      <li class = "todo">
        <input type="checkbox" class="check"></input>
        <p class="item-text">${element.description}</p>
        <div class="moreBtn"></div>
      </li>`
  )).join('');
}

window.onload = () => {
  show();
>>>>>>> c048d6ab65429f7e304ec1adb0ec9037c6757b2f
};
