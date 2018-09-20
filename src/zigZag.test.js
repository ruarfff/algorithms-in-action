const zigZagSeqLen = require("./zigZag");

test("can handle a list that is all a sequence", () => {
  expect(zigZagSeqLen([1, 7, 4, 9, 2, 5])).toEqual(6);
});

test("can handle a list with more than one valid subsequence", () => {
  expect(zigZagSeqLen([1, 17, 5, 10, 13, 15, 10, 5, 16, 8])).toEqual(7);
});
test("return 1 when only one number", () => {
  expect(zigZagSeqLen([44])).toEqual(1);
});
test("returns 2", () => {
  expect(zigZagSeqLen([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(2);
});
test("returns 8", () => {
  expect(
    zigZagSeqLen([
      70,
      55,
      13,
      2,
      99,
      2,
      80,
      80,
      80,
      80,
      100,
      19,
      7,
      5,
      5,
      5,
      1000,
      32,
      32
    ])
  ).toEqual(8);
});

test("returns 36", () => {
  expect(
    zigZagSeqLen([
      374,
      40,
      854,
      203,
      203,
      156,
      362,
      279,
      812,
      955,
      600,
      947,
      978,
      46,
      100,
      953,
      670,
      862,
      568,
      188,
      67,
      669,
      810,
      704,
      52,
      861,
      49,
      640,
      370,
      908,
      477,
      245,
      413,
      109,
      659,
      401,
      483,
      308,
      609,
      120,
      249,
      22,
      176,
      279,
      23,
      22,
      617,
      462,
      459,
      244
    ])
  ).toEqual(36);
});
