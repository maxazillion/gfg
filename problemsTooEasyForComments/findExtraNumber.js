//one array has another number in it

findExtra = (a, b, n) => {
  //code here
  let extraNumberIndex = -1;
  for (let i = 0; i < n; i++) {
    if (i - 1 !== n && a[i] !== b[i]) {
      extraNumberIndex = i;
      i = n + 1;
    }
  }

  return extraNumberIndex !== -1 ? extraNumberIndex : n;
};

console.log(findExtra([2, 4, 6, 8, 10], [2, 4, 6, 8, 9, 10], 5));
