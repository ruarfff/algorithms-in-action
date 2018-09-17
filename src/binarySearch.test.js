const search = require('./binarySearch');

test('can search an array of numbers', () => {
  expect(search([1, 2, 3, 4, 5, 6], 2)).toBe(1);
  expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(5);
  expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3);
  expect(search([3, 4, 5, 6], 2)).toBe(null);
});