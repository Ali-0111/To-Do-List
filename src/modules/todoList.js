class List {
  constructor() {
    this.db = [];
    this.resetBtn = document.querySelector('.restart');
    this.input = document.querySelector('.add-input');
    this.enterBtn = document.querySelector('.enter');
    this.items = document.querySelector('.items');
    this.clearBtn = document.querySelector('.clear-btn');
    this.index = 0;
  }

  addTodo() {
    // new object will be added to array

    this.db.push({
      description: this.input.value,
      completed: false,
      index: this.index + 1,
    });

    // storage updated
    this.save();
  }

  save() {
    localStorage.setItem('data', JSON.stringify(this.db));
  }

  show() {
    const li = document.createElement('li');
    li.className = 'todo';
    li.innerHTML = `
        <button class="check"></button>
        <p class="item-text">${this.input.value}</p>
        <div class="moreBtn"></div>
        `;
    this.items.appendChild(li);
    this.input.value = '';
  }
}

const list = new List();
export default list;