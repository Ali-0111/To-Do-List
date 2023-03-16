import localStorageMock from './localStorageMock.js';

const completedTask = (tasks, index) => {
  tasks[index].completed = true;
  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};

export default completedTask;