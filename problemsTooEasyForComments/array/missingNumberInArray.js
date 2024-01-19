//User function Template for javascript

missingNumber = (array, n) => {
  //code here
  let returnValue = 0;
  let arrTotal = 0;

  for (let i = 1; i < n; i++) {
    arrTotal = arrTotal + array[i - 1];
    returnValue = returnValue + i;
    if (i === n - 1) {
      returnValue = returnValue + i + 1;
    }
  }

  return returnValue - arrTotal;
};

console.log(missingNumber([1, 2, 3, 4, 6], 6));
