// writing a function that accepts an arguement that returns the squared of the number

function square(num) {
  return num * num;
}
console.log(`The function square returns ${square(16)}`);

function sum(x, y) {
  return x + y;
}
console.log(`The sum function returns ${sum(4, 23)}`);

function divide(a, b) {
  return Math.trunc(a / b);
}

console.log(`The divide function returns ${divide(1 / 4)}`);

// Return statement, ends function's execution
// function isPurple(color) {
//     if (color.toLowerCase === 'purple') {
//         return true;
//     } else {
//         return false;
//     }
// }

// Refactoring #1
// function isPurple(color) {
//     if (color.toLowerCase === 'purple') {
//         return true;
//     }
//     return false;
// }

// Refectoring #2 - Only works for a Yes or No
function isPurple(color) {
  return color.toLowerCase === "purple";
}

// Looping through an array and finding an element
function containsPurple(arr) {
  for (let color of arr) {
    if (color.toLowerCase() === "purple" || color.toLowerCase() === "green") {
      return true;
    }
  }
  return false;
}

const colorEl1 = ["pink", "blue", "green"];
const colorEl2 = ["orange", "yellow", "purple"];

console.log(containsPurple(colorEl1));
console.log(containsPurple(colorEl2));
