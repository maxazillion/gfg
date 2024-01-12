const sortKArr = (arr, k) => {
  let sortArr = [...arr].sort((a, b) => a - b);
  let returnValue = "Yes";
  arr.forEach((item, index) => {
    if (Math.abs(index - sortArr.indexOf(item)) > k) {
      console.log(index, item);
      returnValue = "No";
      sortArr = [];
    }
  });

  return returnValue;
};

const sortKArr1 = (arr, k) => {
  let answer = "Yes";
  let arrays = [];
  let sortedArr = [...arr].sort((a, b) => a - b);

  arr.forEach((item, index) => {
    let tempArr = [...arr];

    if (index + k < arr.length) {
      arrays.push(
        new Set(tempArr.slice(index - k < 0 ? 0 : index - k, index + k))
      );
    } else {
      arrays.push(
        new Set(tempArr.slice(index - k < 0 ? 0 : index - k, arr.length))
      );
    }
  });

  sortedArr.forEach((item, index) => {
    if (!arrays[index].has(item)) {
      answer = "No";
    }
  });

  console.log(arrays);
  return answer;
};

const sortKArr2 = (arr, k) => {
  let sortArr = [...arr].sort((a, b) => a - b);
  let returnValue = "Yes";

  arr.forEach((item, index) => {
    let kAdjust = k - 1;
    let tempSet = null;
    let tempArr = [...sortArr];
    if (index + k < arr.length) {
      tempSet = new Set(
        tempArr.slice(index - k < 0 ? 0 : index - kAdjust, index + kAdjust)
      );
    } else {
      tempSet = new Set(
        tempArr.slice(index - k < 0 ? 0 : index - kAdjust, arr.length)
      );
    }

    if (!tempSet.has(item)) {
      console.log("no");
      returnValue = "No";
    }
  });

  return returnValue;
};

const sortKArr3 = (arr, k) => {
  let sortArr = [...arr].sort((a, b) => a - b);
  let returnValue = "Yes";
  let kAdjust = k + 1;

  arr.forEach((item, index) => {
    let tempArr = null;
    if (index + kAdjust < arr.length) {
      tempArr = sortArr.slice(
        index - kAdjust < 0 ? 0 : index - kAdjust,
        index + kAdjust
      );
    } else {
      tempArr = sortArr.slice(
        index - kAdjust < 0 ? 0 : index - kAdjust,
        arr.length
      );
    }

    if (!tempArr.includes(item)) {
      returnValue = "No";
      return;
    }
  });

  return returnValue;
};
// 3, 2, 1, 5, 6, 4
// 1, 2, 3, 4, 5, 6
console.log(sortKArr3([3, 2, 1, 5, 6, 4], 2));
