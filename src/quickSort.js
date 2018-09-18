const quickSort = list => {
  if (!list || list.length < 2) return list;
  const [pivot, ...tail] = list;
  return [
    ...quickSort(tail.filter(val => val <= pivot)),
    pivot,
    ...quickSort(tail.filter(val => val > pivot))
  ];
};

module.exports = quickSort;
