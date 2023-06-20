import todoList from '../todoList.js';
import handleDelete from '../functions/deleteAllCompleted.js';

export default function createTrashBtn(obj, renderItems) {
  const delBtn = document.createElement('button');
  delBtn.type = 'button';
  delBtn.className = 'moreBtn';
  delBtn.id = `delete-Btn${obj.index}`;

  // event for deleteBtn
  delBtn.onclick = () => {
    todoList.db.splice(obj.index - 1, 1);
    handleDelete(renderItems);
  };

  return delBtn;
}