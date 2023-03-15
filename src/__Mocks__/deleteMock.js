import localStorageMock from './localStorageMock.js';

const deleteOnlyOne = (tasks, index) => {
  tasks.splice(index, 1);
  tasks.forEach((task, i) => {
    task.index = i+1;
  });
  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};

export {deleteOnlyOne};
