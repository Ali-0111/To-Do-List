/* @jest-environment jsdom */
import editeTask from '../__Mocks__/edite-Mock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';
import tasks from './tasks.js';

describe('editeTask validator', () => {
  //  test 1
  test('task[0] edited description: work1 for workEdite', () => {
    expect(editeTask(tasks, 0, 'workEdite')).toHaveLength(4);
  });
  // test 2
  test('first object should have description workEdite', () => {
    expect(tasks[0].description).toBe('workEdite');
  });

  // test 3
  test('local storage first elements description should be workEdite', () => {
    expect(localStorageMock.getFromLocal('data')[0].description).toMatch(/workEdite/);
  });
});