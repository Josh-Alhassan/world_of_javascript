// A while loop excels when you don't exactly know when a condition is going to end

// While(Some Conditio)
// In the loop, update or attempt to make that condition false

const target = Math.trunc(Math.random() * 10);
let guess = Math.trunc(Math.random() * 10);

while (guess !== target) {
  console.log(guess);
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.trunc(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log("CONGRATS YOU WIN");

// BREAK: special keywords NOT commonly used in for-loops
// Refactoring the above facotring in Break keyword

while (true) {
  if (target === guess) break;
  console.log(`Target: ${target} Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log("CONGRATS YOU WIN");
