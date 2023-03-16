import status from '../__Mocks__/updateStatus.js';
import localStorageMock from '../__Mocks__/localStorageMock.js';

describe('validation for status update', () => {
  const tasks = [
    {
      description: 'work1',
      completed: false,
      index: 1,
    },
    {
      description: 'work2',
      completed: true,
      index: 2,
    },
  ];

  // change first object false value
  test('change false value to true', () => {
    expect(status(tasks, 1)[0].completed).toBe(true);
  });

  // check new value in local storage
  test('first object should be true', () => {
    expect(localStorageMock.getFromLocal('data')[0].completed).toBe(true);
  });
});