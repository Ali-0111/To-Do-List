/* @jest-environment jsdom */

import addItem from '../__Mocks__/add-Mock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('validation for add-function', () => {
  // set environment
  document.body.innerHTML = '<input id ="input" value = "work1" >';
  const tasks = [];

  // test1
  test('it should add new item to array of objects', () => {
    expect(addItem(tasks)).toHaveLength(1);
  });

  // test 2

  test('it should save new item to storage', () => {
    expect(localStorageMock.getFromLocal('data')).toHaveLength(1);
  });

  // task 3

  test('number of tasks should be 2', () => {
    expect(addItem(tasks)).toHaveLength(2);
  });

  // task 4

  test('work1 should be in tasks[0]', () => {
    expect(tasks[0].description).toMatch(/work1/);
  });

  // task 5
  test('work1 should be in tasks[1]', () => {
    expect(tasks[1].description).toMatch(/work1/);
  });

  // task 6 indexes

  test('work1 index should be 0 ', () => {
    expect(tasks[0].index).toBe(0);
  });

  test('work2 index should be 1 ', () => {
    expect(tasks[1].index).toBe(1);
  });
});