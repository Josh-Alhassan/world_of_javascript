function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }
  return result;
}

console.log(doubleArr([1, 4, 6]));

// FUNCTION EXPRESSION
const square = function (num) {
  return num * num;
};

console.log(square(7));
