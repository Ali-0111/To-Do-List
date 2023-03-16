/* @jest-environment jsdom */
import deleteOnlyOne from '../__Mocks__/deleteMock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';
import tasks from '../modules/tasks.js';

describe('removeOnlyOne Validation', () => {
  //  test 1
  test('task[0] removed: 3 item- should remain', () => {
    expect(deleteOnlyOne(tasks, 0)).toHaveLength(3);
  });
  // test 2
  test('first object should have index 1', () => {
    expect(tasks[0].index).toBe(1);
  });

  // test 3
  test('local storage first elements description should be work2', () => {
    expect(localStorageMock.getFromLocal('data')[0].description).toMatch(/work2/);
  });
});