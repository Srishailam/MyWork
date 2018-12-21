function findNumber(values) {
  let result = [];

  for (let i = 0; i < values.length; ++i) {
    if (0 <= values[i]) {
      result[values[i]] = true;
    }
  }
  for (let i = 1; i <= result.length; ++i) {
    if (undefined === result[i]) {
      return i;
    }
  }

  return 1
}
findNumber([1,2,3,4,5,6,8,9,10,11,12]);
(13) [empty, true, true, true, true, true, true, empty, true, true, true, true, true]
7
