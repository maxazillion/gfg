const reorderByK = (q, k) => {
  let returnArr = [];
  for (let i = 0; i < q.length; i++) {
    if (i < k) {
      returnArr.unshift(q[i]);
    } else {
      returnArr.push(q[i]);
    }
  }
  return returnArr;
};

console.log(reorderByK([1, 2, 3, 4, 5], 3));
