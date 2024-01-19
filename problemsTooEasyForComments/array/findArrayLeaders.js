const findArrayLeaders = (a, n) => {
  const arrayLeaders = [];
  a.forEach((number) => {
    while (
      number > arrayLeaders[arrayLeaders.length - 1] &&
      arrayLeaders.length > 0
    ) {
      arrayLeaders.pop();
    }
    arrayLeaders.push(number);
  });
  return arrayLeaders;
};

console.log(findArrayLeaders([16, 17, 4, 3, 5, 2], 5));
