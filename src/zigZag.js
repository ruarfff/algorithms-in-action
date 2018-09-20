const zigZagSeqLen = list => {
  let bestLength = 1;
  const up = [1];
  const down = [1];

  for (let i = 1; i < list.length; i++) {
    const item = list[i];
    up.push(1);
    down.push(1);
    for (let j = 0; j < i; j++) {
      const previousItem = list[j];
      if (item > previousItem) {
        up[i] = Math.max(down[j] + 1, up[i]);
      } else if (item < previousItem) {
        down[i] = Math.max(up[j] + 1, down[i]);
      }
    }
    const length = Math.max(up[i], down[i]);
    bestLength = Math.max(bestLength, length);
  }

  return bestLength;
};

module.exports = zigZagSeqLen;
