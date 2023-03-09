import './style.css';

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
};
