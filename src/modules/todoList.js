import TodoItem from './todoItem.js';
import saveLocal from './localStorageFunctions.js';

export class TodoList {
  constructor() {
    this.init();
  }

  init() {
    this.db = JSON.parse(localStorage.getItem('data')) || [];
    this.bindElements();
  }

  bindElements() {
    this.newTodoInput = document.querySelector('.add-input');
    this.toDoListContainer = document.querySelector('.items');
    this.resetBtn = document.querySelector('.restart');
    this.enterBtn = document.querySelector('.enter');
    this.clearBtn = document.querySelector('.clear-btn');
    this.submitMsg = document.querySelector('.submit-warning');
  }

  indexBasedSort() {
    this.db.forEach((element, i) => {
      element.index = i + 1;
    });
  }

  clearInputField() {
    this.newTodoInput.value = '';
  }

  createNewTodo() {
    const newTodoIndex = this.db.length + 1;
    const newTodoDescription = this.newTodoInput.value;
    return new TodoItem(newTodoDescription, newTodoIndex);
  }

  handleNewTodo() {
    const newItem = this.createNewTodo();
    if (newItem.description.trim()) {
      this.submitMsg.textContent = '';
      this.db.push(newItem);
      saveLocal(this.db);
    } else {
      this.submitMsg.textContent = 'Invalid text input';
    }
    this.clearInputField();
  }

  createDeleteBtn(obj) {
    const delBtn = document.createElement('button');
    delBtn.type = 'button';
    delBtn.className = 'moreBtn';
    delBtn.id = `delete-Btn${obj.index}`;

    // event for deleteBtn
    delBtn.onclick = () => {
      this.db.splice(obj.index - 1, 1);
      this.handleDelete();
    };

    return delBtn;
  }

  createReadOnlyInput(obj) {
    const inputElement = document.createElement('input');
    inputElement.readOnly = true;
    inputElement.classList.add('item-text');
    inputElement.id = `input${obj.index}`;

    // conditional class if completed = true
    if (obj.completed) {
      inputElement.classList.add('scratch');
    }
    inputElement.value = obj.description;

    // event for edition and pressing Enter
    inputElement.addEventListener('click', () => {
      inputElement.removeAttribute('readonly');
    });

    inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.db[obj.index - 1].description = inputElement.value;
        saveLocal(this.db);
        inputElement.setAttribute('readonly', true);
      }
    });

    return inputElement;
  }

  createCheckbox(obj) {
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.classList.add('check');
    // checked status
    checkboxElement.checked = obj.completed;

    // event for check/ uncheck
    checkboxElement.onclick = () => {
      const inputElement = document.querySelector(`#input${obj.index}`);
      inputElement.classList.toggle('scratch');
      this.db[obj.index - 1].completed = checkboxElement.checked;
      saveLocal(this.db);
    };
    return checkboxElement;
  }

  createTodoItem(obj) {
    const li = document.createElement('li');
    li.className = 'todo-item';

    // Children
    const checkbox = this.createCheckbox(obj);
    const inputReadOnly = this.createReadOnlyInput(obj);
    const delBtn = this.createDeleteBtn(obj);
    // append children
    li.append(checkbox, inputReadOnly, delBtn);
    return li;
  }

  renderItems() {
    this.toDoListContainer.innerHTML = '';
    this.db.forEach((item) => {
      const li = this.createTodoItem(item);
      // append li to ul
      this.toDoListContainer.appendChild(li);
    });
  }

  deleteCompleted() {
    this.db = this.db.filter((task) => !task.completed);
  }

  // sort , save , render
  handleDelete() {
    this.indexBasedSort();
    saveLocal(this.db);
    this.renderItems();
  }
}

const todoList = new TodoList();
export default todoList;