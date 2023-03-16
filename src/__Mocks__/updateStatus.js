import localStorageMock from './localStorageMock.js';

const status = (tasks, index) => {
  tasks[index - 1].completed = !tasks[index - 1].completed;
  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};

export default status;