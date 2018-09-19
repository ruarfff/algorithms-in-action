const sort = list => {
  let sorted = [];
  let listCp = [...list];
  for (let i = 0; i < list.length; i++) {
    let smallest = findSmallest(listCp);
    sorted.push(listCp.splice(smallest, 1)[0]);
  }
  return sorted;
};

function findSmallest(list) {
  let smallest = list[0];
  let smallestIndex = 0;
  for (let i = 1; i < list.length; i++) {
    if (list[i] < smallest) {
      smallest = list[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

module.exports = sort;
