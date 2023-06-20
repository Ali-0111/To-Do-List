import createCheckbox from './createCheckBox.js';
import createReadOnlyInput from './createReadOnly.js';
import createTrashBtn from './createTrashBtn.js';

export default function createTodoItem(obj, renderItems) {
  const li = document.createElement('li');
  li.className = 'todo-item';
  // Children
  const checkbox = createCheckbox(obj);
  const inputReadOnly = createReadOnlyInput(obj);
  const delBtn = createTrashBtn(obj, renderItems);

  // append children
  li.append(checkbox, inputReadOnly, delBtn);
  return li;
}