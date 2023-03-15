/* @jest-environment jsdom */

import addItem from '../__Mocks__/add-Mock.js';
import deleteItem from '../__Mocks__/deleteMock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('validation for delete-function', () => {
  // set environment
  document.body.innerHTML = '<input id ="input" value = "work1" >';
  const tasks = [];

  beforeEach(() => {
    // add a few tasks to the array and store them in local storage
    addItem(tasks);
    addItem(tasks);
    localStorageMock.saveToLocal('data', tasks);
  });

  // test1
  test('it should delete item from array of objects', () => {
    deleteItem(tasks, 1);
    expect(tasks).toHaveLength(1);
    expect(tasks[0].description).toBe('work1');
  });

  // test 2

  test('it should remove item from storage', () => {
    deleteItem(tasks, 0);
    expect(localStorageMock.getFromLocal('data')).toHaveLength(2);
  });

  // test 3

  test('it should renumber the index property of the remaining tasks', () => {
    deleteItem(tasks, 0);
    expect(tasks[0].index).toBe(0);
  });
});
