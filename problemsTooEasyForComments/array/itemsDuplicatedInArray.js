const itemsDuplicatedInArray = (a, n) => {
  const numSet = new Set([]);
  let numSetLen = 0;
  const duplicatedItems = new Set([]);

  a.forEach((item) => {
    numSet.add(item);
    if (numSetLen === numSet.size) {
      duplicatedItems.add(item);
    }
    numSetLen = numSet.size;
  });

  return Array.from(duplicatedItems).sort((a, b) => a - b);
};

console.log(itemsDuplicatedInArray([0, 3, 1, 2, 4, 4, 3], 5));
