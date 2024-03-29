/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localStorageMock.js';
import tasks from './tasks.js';
import clearCompleted from '../__Mocks__/clearCompleted-Mock.js';

describe('Clear All Completed Tasks Validator', () => {
  test('Clear All Completed Tasks', () => {
    expect(clearCompleted(tasks)).toHaveLength(2);
  });

  test('Comprobate index value from work2 is equal to 1', () => {
    expect(tasks[0].index).toBe(1);
  });

  test('local storage second elements completed should be false', () => {
    expect(localStorageMock.getFromLocal('data')[1].completed).toBeFalsy();
  });
});