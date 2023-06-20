import todoList from '../todoList.js';
import createTodoItem from '../create_li/createTodoItem.js';

export default function renderItems() {
  todoList.toDoListContainer.innerHTML = '';
  todoList.db.forEach((item) => {
    // to avoid CD, renderItems passed
    const li = createTodoItem(item, renderItems);

    // append li to ul
    todoList.toDoListContainer.appendChild(li);
  });
}