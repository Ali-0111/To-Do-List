import localStorageMock from './localStorageMock.js';

const deleteItem = (tasks, index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i;
  });
  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};

export default deleteItem;
