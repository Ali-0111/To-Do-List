import './style.css';

const items = document.querySelector('.items');

const data = [
  {

    description: 'Reading Book',
    completed: false,
    index: 1,
  },
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
];

function show() {
  items.innerHTML = data.map((element) => (`
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
