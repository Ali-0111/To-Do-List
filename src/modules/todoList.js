class List {
  constructor() {
    this.db =  [{

        description: "Reading Book",
        completed: false,
        index: 1,

        description: "Buying Book",
        completed: false,
        index: 2,

        description: "Coding with Partner",
        completed: false,
        index: 3,
      }];
      
    this.resetBtn = document.querySelector('.restart');
    this.input = document.querySelector('.add-input');
    this.enterBtn = document.querySelector('.enter');
    this.items = document.querySelector('.items');
    this.clearBtn = document.querySelector('.clear-btn');
    this.index = 0;
  }

  save() {
    localStorage.setItem('data', JSON.stringify(this.db));
  }

  show() {
    this.items.innerHTML = this.db.map((element) => (`
      <li class = "todo">
        <button class="check"></button>
        <p class="item-text">${element.description}</p>
        <div class="moreBtn"></div>
      </li>`
    )).join('');
  }
}

const list = new List();
export default list;