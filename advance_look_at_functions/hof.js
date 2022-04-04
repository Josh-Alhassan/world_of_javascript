// creating functions
const add = function (x, y) {
  return x + y;
};

const substract = function (x, y) {
  return x - y;
};

const multiply = function (x, y) {
  return x * y;
};

const divide = function (x, y) {
  return x / y;
};

// Store the functions in an array
const operations = [add, substract, multiply, divide];
// Performing operations
console.log(operations[0](23, 4));
console.log(operations[2](45, 32));

// Looping through the functions
for (let i = 0; i < operations.length; i++) {
  console.log(operations[i]);
  console.log(operations[i](23, 6));
}

// Looping through using a for..of
for (let func of operations) {
  console.log(func(54, 5));
}

// Function as method
const obj = {
  doSomething: multiply,
};

console.log(obj.doSomething(6, 7));

// FUNCTION AS ARGUMENTS
function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("HAHAHAHAH");
}

function rage() {
  console.log("AHHHHHH!");
}

console.log(callTwice(laugh));

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

console.log(repeatNTimes(laugh, 23));

function pickOne(f1, f2) {
  let rand = Math.random();
  console.log(rand);
  if (rand < 0.5) {
    f1();
  } else {
    f2();
  }
}

console.log(pickOne(rage, laugh));

// FUNCTION AS RETURNED VALUE

// Factory function
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);

console.log(triple(3));
console.log(double(4));

function makeBetweenFunc(x, y) {
  return function (num) {
    return num >= x && num <= y;
  };
}

const isChild = makeBetweenFunc(0, 18);
const isInNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);

console.log(isChild(12));
console.log(isInNineties(1998));
console.log(isNiceWeather(82));

// CALLBACK FUNCTIONS
// Anonymous functions are one time used function
