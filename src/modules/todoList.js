import create from './createNewitems.js';
import saveLocal from './localStorageFunctions.js';
import status from './make_true.js';
import edit from './inputedition.js';
import removeitem from './removeitem.js';

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

    saveLocal(this.db);
    this.input.value = '';
  }

  createNewItem =() => {
    create.createItems(this.db);
    status(this.db);
    edit(this.db);
  }

  removeOnlyOne = () => {
    removeitem(this.db);
  }
}

const list = new List();
export default list;