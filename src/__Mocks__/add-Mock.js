import localStorageMock from './localStorageMock.js';

const addItem = (tasks) => {
  const input = document.querySelector('#input');
  const newItem = {
    description: `${input.value}`,
    completed: false,
    index: Number(`${tasks.length}`),
  };

  tasks.push(newItem);
  localStorageMock.saveToLocal('data', tasks);

  return tasks;
};

export default addItem;