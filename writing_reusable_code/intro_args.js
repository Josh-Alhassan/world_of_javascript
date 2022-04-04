function greet(person) {
  return `Hello ${person}`;
}

console.log(greet("Joshua"));

// Roll Die function
function rollDie1() {
  let roll1 = Math.trunc(Math.random() * 6) + 1;
  return `Rolled ${roll1}`;
}
// console.log(rollDie());

// Function that returns a function
function throwDie1(rollNum) {
  for (let i = 0; i < rollNum; i++) {
    console.log(rollDie1());
  }
}

console.log(throwDie1(8));
