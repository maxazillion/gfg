/*
    given a string number such as 1290029919 remove N chars

    the goal is to get the smallest number possible

    im going to pretty much show my thought process for this problem

    rule 1: If you can remove all numbers before a set of '0's that takes priority
    example: N = 3 // 1290029919 -> 29919

     -> incorrect rule 2: If creating leading zeros is impossible, remove the highest number

    after gameplanning this or a bit i realize that this is not true
    in the number 8792 given N = 1 it is better to remove the 0th index of 8 
    to give a leading 7

    rule 1 is still true

    i think the next important thing as proven by the not so good second rulse should
    be to ensure that the leading number is as small as possible

    rule 2: ensure the leading number is as small as possible
    rule 3: if the leading number will always be the same, remove the highest number of the
    lowest index

    since i'm going to be submiting this to geeks for geeks i want to make the first itteration
    as fool proof as possible. I want to eventually be able to do this through my "rules" 
    however i want points and i'm pretty sure i'll have a better chance at brute force. 
    after I complete the brute foce way ill use it to error check my other "rules" function.
*/

const bruteForceV1 = (str, n) => {
  /*
    the game plan will be simple, create an array from the string that returns numbers
    '123' -> [1, 2, 3]

    create every possibility 
    '123' 2 -> [3][2][1]

    sort and return index 0 joined
    [1][2][3] -> '1'
    */

  const numArr = str.split("");
  let choiceObject = { 1: [[...numArr]] };

  /*
    I think im going to create an object actually the objext will have keys from 1 -> N
    {
        1: [2, 3], [1, 3], [1, 2]
        2: [3], [2], [1], [3], [1], [2]
    }

    the lowest number of the highest key will be the lowest possible number
    */

  for (let i = 1; i < n + 2; i++) {
    if (i + 1 !== n + 2) choiceObject[i + 1] = [];
    if (choiceObject[i]) {
      choiceObject[i].forEach((subArray) => {
        subArray.forEach((number, index) => {
          const newArray = subArray
            .slice(0, index)
            .concat(subArray.slice(index + 1));
          if (choiceObject[i + 1]) choiceObject[i + 1].push(newArray);
        });
      });
    }
  }

  /*
  This is just a really bad way to do this since it's very complex but i think it works
  */

  const lastList = choiceObject[n + 1].map((item) => {
    return parseInt(item.join(""));
  });

  console.log(choiceObject);
  return lastList.sort((a, b) => a - b)[0];
};

console.log(bruteForceV1("149811", 1));

/*
"149811"
'1290029919'
*/
