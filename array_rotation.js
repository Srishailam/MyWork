function usingArrayShift(data, d) {
  let temp = data.splice(0);
  for (let i=0; i<d; i++) {
    let first = temp.shift();
    temp.push(first);
  }
  return temp;
}
usingArrayShift([1,2,3,4,5,6,7], 2);
//[3, 4, 5, 6, 7, 1, 2]
