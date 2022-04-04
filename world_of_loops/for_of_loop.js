// FOR ... OF
// for (variable of iterable) {
//     Statement
// }

// for...of works on anything that iterable

let comments = ["soccer", "popheads", "cringe", "books"];
for (let comment of comments) {
  console.log(comment);
}

let char = "Joshua Alhassan Abel";
for (charEl of char) {
  console.log(charEl);
}

// ====================================
// FOR...OF & FOR LOOP
// ====================================
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
];

// Using Regular for...loop
for (let i = 0; i < magicSquare.length; i++) {
  let row = magicSquare[i];
  let sum = 0;
  for (let j = 0; j < row.length; j++) {
    sum = sum + row[j];
  }
  console.log(`${row} summed to ${sum}`);
}

// Using regular For...of Loop
console.log("Using for of Loop");
for (let row of magicSquare) {
  let sum = 0;
  for (let num of row) {
    sum += num;
  }
  console.log(`${row} summed to ${sum}`);
}

// Where for...of doesn't work
const word1 = ["mail", "milk", "bath", "black"];
const word2 = ["box", "shake", "tub", "berry"];

for (let i = 0; i < word1.length; i++) {
  console.log(`${word1[i]}${word2[i]}`);
}

console.log("============================");
console.log("============================");
// =========================
// FOR OF WITH OBJECTS
// =========================
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amedeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Caroline: 7.5,
};

// Looping through the keys using Object.keys
for (let movie of Object.keys(movieReviews)) {
  console.log(movie);
}

// Looping through the values using Object.values and finding the average
let rating = Object.values(movieReviews);
let totalRate = 0;
for (let rate of rating) {
  console.log(rate);
  totalRate += rate;
}

let average = totalRate / rating.length;
console.log(average);
