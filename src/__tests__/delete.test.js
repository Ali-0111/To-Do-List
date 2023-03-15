/* @jest-environment jsdom */
import deleteOnlyOne from '../__Mocks__/deleteMock.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('removeOnlyOne Validation', () => {
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