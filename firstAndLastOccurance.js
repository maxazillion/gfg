indexes = (v, x) => {
  // code here
  let returnArr = [null, null];

  for (let i = 0; i < v.length; i++) {
    if (v[i] === x) {
      if (returnArr[0] === null) {
        returnArr = [i, i];
      } else {
        returnArr[1] = i;
      }
    }
  }

  return [
    returnArr[0] !== null ? returnArr[0] : -1,
    returnArr[1] !== null ? returnArr[1] : -1,
  ];
};

console.log(indexes([0, 1, 4, 6, 3, 1, 4], 1));
