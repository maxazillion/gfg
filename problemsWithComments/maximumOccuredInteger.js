/*
Given n integer ranges, the task is to find the maximum occurring integer in these ranges. If more than one such integer exists, find the smallest one. The ranges are given as two arrays L[] and R[].  L[i] consists of starting point of range and R[i] consists of corresponding end point of the range.

For example consider the following ranges.
L[] = {2, 1, 3}, R[] = {5, 3, 9)
Ranges represented by above arrays are.
[2, 5] = {2, 3, 4, 5}
[1, 3] = {1, 2, 3}
[3, 9] = {3, 4, 5, 6, 7, 8, 9}
The maximum occurred integer in these ranges is 3.

my initial thought was to create a  list of all ranges [2, 5] [1, 3] [3, 9]
then iterate through numbers 1 -> 9 (highest number) and if they fit within range
number > listOfRanges[0] && number < listOfRanges[1] that number is incremented on a 
object that has a key of the number and a value of times counted
the highest count with the lowest number would be returned

this is not a good way of solving it, though it would work it would make too many loops
and probably fail on the complexity check of geeks for geeks

i think the idea will work but the execution is lacking

i'm tring to avoid simply iterating through the lists and counting since youd have to loop
then loop within the loop, ill try to do that first to get an idea though

i actually just noticed they provice the maxx right away so im going to change my game plan 
to match the first game plan again since that step is already covered

*/

const maximumOccuredV1 = (l, r, n, maxx) => {
  let answer = -1;
  let answerCount = 0;

  for (let count = 0; count < maxx; count++) {
    let hitsPerCount = 0;

    for (let index = 0; index < n; index++) {
      if (l[index] <= count && r[index] >= count) {
        hitsPerCount += hitsPerCount + 1;
      }
    }
    // this is kinda nice because now i dont have to make sure the number is that lowest of the most occured
    if (hitsPerCount > answerCount) {
      answer = count;
      answerCount = hitsPerCount;
    }
  }

  return answer;
};

/* 
i think this would have passed all the test cases but as i figured it does take a little too long on some of the test cases

what i could do is iterate through the left and right list and on each range create a list of numbers 

{1, 5} -> [1, 2, 3, 4, 5]
{1, 2} -> [1, 2]

in order to make this step avoid looping a ton of times i figure at the start of the function i can create a number array from 0 -> max
after creating that i can simply slice that array at each respective index 

numArray = [0, 1, 2, 3, 4, 5]

{1, 5} = numArray[1, 5]

push those numbers to an array 

[1, 2, 3, 4, 5, 1, 2]

iterate through that list and go from there, i'm just not sure how much better it really is, i may as well make it though

ill figure out how to find the most occured after i type this out because im betting ill find something better along the way 

*/

const maximumOccuredV2 = (l, r, n, maxx) => {
  let countingArray = Array.from({ length: maxx }, (_, index) => 1 + index);
  const allNumbersInRanges = [];
  const numbersByCount = {};
  let mostOccured = -1;
  let mostOccuredAmount = 0;

  for (let i = 0; i < n; i++) {
    let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
    allNumbersInRanges.push(...subArray);
  }

  for (let i = 0; i < allNumbersInRanges.length; i++) {
    if (!numbersByCount[allNumbersInRanges[i]]) {
      numbersByCount[allNumbersInRanges[i]] = 1;
    } else {
      numbersByCount[allNumbersInRanges[i]] =
        numbersByCount[allNumbersInRanges[i]] + 1;
    }
  }

  Object.keys(numbersByCount).map((number) => {
    if (numbersByCount[number] > mostOccured) {
      mostOccured = number;
      mostOccuredAmount = numbersByCount[number];
    }
  });

  return mostOccured;
};

/* 
ok so v2 is still pretty complicated
im just going to copy v2 and try to cut down on the complexity i think it has some promise still

i think that i could probably make the counting array just 0 and then increment that counting array baised on the position 
*/

const maximumOccuredV3 = (l, r, n, maxx) => {
  let countingArray = Array.from({ length: maxx }, (_, index) => {
    return { count: 0, number: index + 1 };
  });
  let mostOccured = -1;
  let mostOccuredAmount = 0;

  for (let i = 0; i < n; i++) {
    let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
    subArray.forEach((numberObj) => {
      numberObj.count = numberObj.count + 1;
    });
  }

  countingArray.forEach((numberObj) => {
    if (numberObj.count > mostOccuredAmount) {
      mostOccured = numberObj.number;
      mostOccuredAmount = numberObj.count;
    }
  });

  return mostOccured;
};

const maximumOccuredV4 = (l, r, n, maxx) => {
  let countingArray = Array.from({ length: maxx }, (_, index) => {
    return { count: 0, number: index + 1 };
  });
  let mostOccured = -1;
  let mostOccuredAmount = 0;

  for (let i = 0; i < n; i++) {
    let subArray = countingArray.slice(l[i] - 1, r[i] + 1);
    subArray.forEach((numberObj) => {
      numberObj.count = numberObj.count + 1;
      if (numberObj.count > mostOccuredAmount) {
        mostOccured = numberObj.number;
        mostOccuredAmount = numberObj.count;
      }
    });
  }

  return mostOccured;
};

/*
clearly this is getting me nowhere, i have thought of a new way to do this,
first you loop through and find the difference in the ranges and their start points

[2, 5] = {2, 3, 4, 5}           start: 2 travel: 4
[1, 3] = {1, 2, 3}              start: 1 travel: 2
[3, 9] = {3, 4, 5, 6, 7, 8, 9}  start: 3 travel: 6
[1, 4] = {1, 2, 3, 4}           start: 1 travel: 4

then you count out the max value and create arrays to represent travel in the proper index
first loop:
   1       2    4    5   6   7   8   9   9
[ [2, 4], [4], [6], [], [], [], [], [], [] ]

next we iterate through this and use the length of the item/array to determine how many instances were present in
each of the ranges

1: 2

but then we dont have the right number for the others?
so we will add all of the numbers into the next index and subtract 1

second loop: 
   1       2          4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

third loop:
   1       2          4          5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6, 3, 4], [], [], [], [], [], [] ]

forth loop:
   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

third loop:
   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

third loop:
   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

   1       2    4    5   6   7   8   9   9
[ [2, 4], [4, 1, 3], [6], [], [], [], [], [], [] ]

ect...

the length will be compared against the current highest number and replaced as needed

*/

const maximumOccuredV5 = (l, r, n, maxx) => {
  let answer = -1;
  let answerCount = 0;
  const travelByIndex = Array.from({ length: maxx }, (_, index) => {
    return [];
  });

  for (let i = 0; i < n; i++) {
    travelByIndex[l[i]].push(r[i] - l[i]);
  }

  travelByIndex.forEach((item, index) => {
    if (item.length > 0) {
      item.forEach((subItem) => {
        if (subItem - 1 > -1 && travelByIndex[index + 1]) {
          travelByIndex[index + 1].push(subItem - 1);
        }
        if (item.length > answerCount) {
          answer = index;
          answerCount = item.length;
        }
      });
    }
    // console.log(index, item);
  });

  return answer;
};

console.log(maximumOccuredV5([1, 4, 3, 1], [15, 8, 5, 4], 4, 15));
