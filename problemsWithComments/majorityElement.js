const majorityElement = (a, size) => {
  let amountPerIndex = [];
  let lengthOfAmountPerIndex = 0;
  let halfArrSize = size / 2;
  let majorityNumber = -1;

  a.forEach((number, index) => {
    let differenceInLength = number - lengthOfAmountPerIndex;

    if (differenceInLength > 0) {
      amountPerIndex.push(...Array(differenceInLength).fill(0));
      lengthOfAmountPerIndex = lengthOfAmountPerIndex + differenceInLength;
    }

    amountPerIndex[number - 1] = amountPerIndex[number - 1] + 1;

    if (amountPerIndex[number - 1] > halfArrSize) {
      majorityNumber = number;
    }
  });

  return majorityNumber;
};

const testArr = [1, 18, 1, 18, 4, 13, 2, 5, 14, 2, 14, 15, 11, 2, 3, 17, 6];
console.log(majorityElement(testArr, 17));
