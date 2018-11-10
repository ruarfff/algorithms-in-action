const fib = num => {
  let res = 0;
  if (num <= 2) {
    res = 1;
  } else {
    res = fib(num - 1) + fib(num - 2);
  }
  return res;
};

module.exports = fib;
