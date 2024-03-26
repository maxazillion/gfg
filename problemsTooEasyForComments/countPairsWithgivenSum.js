const getPairsCount = (arr, n, k) => {
  let amountKOccur = 0;
  let filteredArr = arr.filter((number) => number < n);
  for (let i = 0; i < filteredArr.length; i++) {
    for (let si = i + 1; si < filteredArr.length; si++) {
      if (filteredArr[i] <= k && filteredArr[i] + filteredArr[si] === k) {
        amountKOccur += 1;
      }
    }
  }
  return amountKOccur;
};

const getPairsCount1 = (arr, n, k) => {
  let amountKOccur = 0;
  let listOfPairs = [];
  if (arr.length % 2 === 1) {
    arr.push(undefined);
  }
  let loopAmount = arr.length / 2;

  for (let i = 0; i < n; i++) {
    for (let si = i; si <= loopAmount; si++) {
      if (arr[i] <= k) {
        if (arr[i] + arr[si] === k && si !== i && si !== loopAmount - si) {
          amountKOccur += 1;
          listOfPairs.push({ pair: [arr[i], arr[si]], indexes: [i, si] });
        }

        if (arr[i] + arr[loopAmount - si] === k && i !== loopAmount - si) {
          listOfPairs.push({
            pair: [arr[i], arr[loopAmount - si]],
            indexes: [loopAmount - si, i],
          });
          amountKOccur += 1;
        }
      }
    }
  }
  console.log(listOfPairs);
  return amountKOccur;
};

const getPairsCount2 = (arr, n, k) => {
  let amountKOccur = 0;
  if (arr.length % 2 === 1) {
    arr.push(undefined);
  }
  let loopAmount = arr.length / 2;

  for (let i = 0; i < n; i++) {
    for (let si = i; si < loopAmount; si++) {
      if (arr[i] <= k) {
        if (arr[i] + arr[si] === k && si !== i) {
          amountKOccur += 1;
        }

        if (arr[i] + arr[loopAmount - si] === k && i !== loopAmount - si) {
          amountKOccur += 1;
        }
      }
    }
  }
  return amountKOccur;
};

const getPairsCount3 = (arr, n, k) => {
  let amountKOccur = 0;
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = k - arr[i];

    if (hash[complement]) {
      amountKOccur += hash[complement];
    }

    hash[arr[i]] = (hash[arr[i]] || 0) + 1;
  }

  return amountKOccur;
};

const makeArrayFromTestData = (str) => {
  return str.split(" ").map((item) => parseInt(item));
};
const testData = "";
const testArr = [1, 2, 3, 4, 5, 0, 2];
const testArr1 = [1, 5, 7, 1];
const testArr2 = [
  48, 24, 99, 51, 33, 39, 29, 83, 74, 72, 22, 46, 40, 51, 67, 37, 78, 76, 26,
  28, 76, 25, 10, 65, 64, 47, 34, 88, 26, 49, 86, 73, 73, 36, 75, 5, 26, 4, 39,
  99, 27, 12, 97, 67, 63, 15, 3, 92, 90,
];
//                0  1  2  3  4
const testArr3 = [1, 1, 1, 1, 1]; // 10
const testArr4 = [1, 1, 1, 1]; //6
const testArr5 = [1, 1, 1, undefined]; // 3

// console.log(getPairsCount(testArr, testArr.length, 3));
// console.log(getPairsCount1(testArr2, testArr2.length, 50));
// console.log(getPairsCount1(testArr4, testArr4.length, 2));
console.log(getPairsCount3(testArr1, testArr1.length, 6));
