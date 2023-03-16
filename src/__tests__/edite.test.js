/* @jest-environment jsdom */
import editeTask from '../__Mocks__/edite-Mock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('editeTask validator', () => {
  const tasks = [
    {
      description: 'work1',
      completed: false,
      index: 1,
    },
    {
      description: 'work2',
      completed: false,
      index: 2,
    },
    {
      description: 'work3',
      completed: true,
      index: 3,
    },
    {
      description: 'work4',
      completed: true,
      index: 4,
    },
  ];
  //  test 1
  test('task[0] removed: 3 item- should remain', () => {
    expect(editeTask(tasks, 0, 'workEdite')).toHaveLength(4);
  });
  // test 2
  test('first object should have index 1', () => {
    expect(tasks[0].description).toBe('workEdite');
  });

  // test 3
  test('local storage first elements description should be work2', () => {
    expect(localStorageMock.getFromLocal('data')[0].description).toMatch(/workEdite/);
  });
});