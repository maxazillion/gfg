const equilibriumPoint = (a, n) => {
  let answer = -1;
  let right = a.reduce((prev, cur) => prev + cur);
  let left = 0;

  for (let i = 0; i < n; i++) {
    right = right - a[i];
    if (i !== 0) {
      left = left + a[i - 1];
    }
    if (right === left) {
      answer = i + 1;
      i = n + 1;
    }
  }

  return answer;
};

console.log(equilibriumPoint([1, 3, 5, 2, 2], 5));
