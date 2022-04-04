// Roll Die function
function rollDie() {
  let roll = Math.trunc(Math.random() * 6) + 1;
  return `Rolled ${roll}`;
}
// console.log(rollDie());

// Function that returns a function
function throwDie() {
  for (let i = 1; i <= 6; i++) {
    console.log(rollDie());
  }
}

console.log(throwDie());
