const sort = require('./selectionSort');

test('can sort array', () => {
  expect(sort([0, 11, 3, 22, 5, 1])).toEqual([0, 1, 3, 5, 11, 22]);  
});