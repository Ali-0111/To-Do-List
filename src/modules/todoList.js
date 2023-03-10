class List {
  constructor() {
    this.db = JSON.parse(localStorage.getItem('data')) || [];
    this.resetBtn = document.querySelector('.restart');
    this.input = document.querySelector('.add-input');
    this.enterBtn = document.querySelector('.enter');
    this.items = document.querySelector('.items');
    this.clearBtn = document.querySelector('.clear-btn');
  }

  addTodo() {
    // new object will be added to array

    this.db.push({
      description: this.input.value,
      completed: false,
      index: this.db.length + 1,
    });

    this.input.value = '';

    // storage updated
    this.save();
  }

  deleteCompleted() {
    this.db = this.db.filter((task) => !task.completed);
    this.save();
  }

  makeIndex() {
    this.db.forEach((element, i) => {
      element.index = i + 1;
    });
  }

  save() {
    this.makeIndex();
    localStorage.setItem('data', JSON.stringify(this.db));
  }

  show() {
    this.items.innerHTML = this.db.map((element) => (`
      <li class = "todo">
        <input type="checkbox" class="check" ></input>
        <span class="check-btn  ${element.completed ? 'mark' : ''}"></span>
        <input readonly
      class="item-text ${element.completed ? 'scratch' : ''}"
      value="${element.description}">
        <button
        id="delete-Btn${element.index}"
        class="moreBtn"
        type"button">
      </button>
      </li>`
    )).join('');
  }
}

const list = new List();
export default list;