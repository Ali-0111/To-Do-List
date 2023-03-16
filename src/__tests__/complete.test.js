/* @jest-environment jsdom */

import localStorageMock from '../__Mocks__/localStorageMock.js';
import completedTask from '../__Mocks__/completed-Mock.js';
import tasks from '../modules/tasks.js';

describe('completeTask validator', () => {
  //  test 1
  test('task[1] change to complete', () => {
    expect(completedTask(tasks, 1)).toHaveLength(4);
  });
  // test 2
  test('second object should have completed', () => {
    expect(tasks[1].completed).toBeTruthy();
  });

  // test 3
  test('local storage second elements completed should be true', () => {
    expect(localStorageMock.getFromLocal('data')[1].completed).toBeTruthy();
  });
});