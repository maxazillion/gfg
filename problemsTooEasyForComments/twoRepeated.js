twoRepeated = (arr, N) => {
  let numSet = new Set([]);
  let returnArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!numSet.has(arr[i])) {
      numSet.add(arr[i]);
    } else {
      returnArr.push(arr[i]);
    }
    if (returnArr.length === 2) {
      i = i + N;
    }
  }

  return returnArr;
};

console.log(
  twoRepeated(
    [
      40, 59, 24, 7, 20, 22, 41, 57, 45, 50, 9, 55, 27, 62, 1, 56, 49, 36, 42,
      14, 6, 4, 58, 21, 12, 31, 34, 43, 33, 37, 60, 3, 11, 35, 38, 26, 18, 29,
      46, 44, 53, 47, 8, 28, 10, 5, 63, 17, 19, 23, 52, 51, 41, 61, 2, 32, 36,
      13, 48, 16, 25, 39, 15, 30, 54,
    ],
    63
  )
);
