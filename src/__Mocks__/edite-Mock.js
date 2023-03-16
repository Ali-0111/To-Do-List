import localStorageMock from './localStorageMock.js';

const editeTask = (tasks, index, description) => {
  tasks[index].description = description;

  localStorageMock.saveToLocal('data', tasks);
  return tasks;
};

export default editeTask;