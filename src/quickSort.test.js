const quickSort = require("./quickSort");

test("can quickSort array", () => {
  expect(quickSort([11, 2])).toEqual([2, 11]);
  expect(quickSort([11])).toEqual([11]);
  expect(quickSort([0, 11, 3, 22, 5, 1])).toEqual([0, 1, 3, 5, 11, 22]);
  expect(quickSort([0, 11, 3, 0, 0, 22, 5, 1])).toEqual([
    0,
    0,
    0,
    1,
    3,
    5,
    11,
    22
  ]);
});
