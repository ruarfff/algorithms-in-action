const fib = require("./fib");

test("can find fib of a number", () => {
  expect(fib(1)).toEqual(1);
  expect(fib(2)).toEqual(1);
  expect(fib(3)).toEqual(6);
});
