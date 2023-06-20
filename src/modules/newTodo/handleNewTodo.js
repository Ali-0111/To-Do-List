import TodoItem from './todoItem.js';
import saveLocal from '../functions/localStorageFunctions.js';
import todoList from '../todoList.js';

function clearInputField() {
  todoList.newTodoInput.value = '';
}

function createNewTodo() {
  const newTodoIndex = todoList.db.length + 1;
  const newTodoDescription = todoList.newTodoInput.value;
  return new TodoItem(newTodoDescription, newTodoIndex);
}

export default function handleNewTodo() {
  const newItem = createNewTodo();
  if (newItem.description.trim()) {
    todoList.db.push(newItem);
    saveLocal(todoList.db);
    todoList.submitMsg.textContent = '';
  } else {
    todoList.submitMsg.textContent = 'Invalid text input';
  }
  clearInputField();
}