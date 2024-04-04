const sort012 = (arr, N) => {
  let returnArray = [];
  let numberObject = {
    0: [],
    1: [],
    2: [],
  };

  arr.forEach((number) => {
    numberObject[number].push(number);
  });
  Object.values(numberObject).forEach((item) => returnArray.push(...item));
  return returnArray;
};

// this works and mutates origin
const sort0122 = (arr, N) => {
  let arrClone = [...arr];
  let numberObject = {
    0: [],
    1: [],
    2: [],
  };
  for (let i = 0; i < N; i++) {
    arr.pop();
    numberObject[arrClone[i]].push(arrClone[i]);
  }

  Object.values(numberObject).forEach((item) => arr.push(...item));
  return arr;
};

// this works and mutates origin
const sort0123 = (arr, N) => {
  let arrClone = [...arr];
  let amountOfOnes = 0;
  let amountOfTwos = 0;
  let amountOfZeros = 0;

  let indexLastOne = null;
  let indexLastTwo = null;
  let indexLastZero = null;

  for (let i = 0; i < N; i++) {
    if (!amountOfOnes && !amountOfTwos && !amountOfZeros) {
      arr.unshift(arrClone[i]);
      arr.pop();
      if (arrClone[i] === 0) {
        amountOfOnes += 1;
        indexLastOne = 0;
      }
      if (arrClone[i] === 1) {
        amountOfTwos += 1;
        indexLastTwo = 0;
      }
      if (arrClone[i] === 2) {
        amountOfZeros += 1;
        indexLastZero = 0;
      }
    } else if (arrClone[i] === 0) {
      if (!indexLastZero) {
      }
    } else if (arrClone[i] === 1) {
    } else if (arrClone[i] === 2) {
    }
  }

  return arr;
};

const test = [0, 2, 1, 2, 0];

console.log(sort0122(test, test.length));
