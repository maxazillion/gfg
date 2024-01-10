// i dont know why this is even a GFG problem
// this finds the first instance of 1 in an array

transitionPoint = (arr, n) => {
  let transitionPoint = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 1) {
      transitionPoint = i;
      i = i + n;
    }
  }

  return transitionPoint;
};

console.log(transitionPoint([0, 0, 0, 1, 0], 4));
