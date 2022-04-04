// Write a isValidPassoword function
// It accepts 2 arguments: password and username
// password must:
//     - be at least 8 characters
//     - cannot contain spaces
//     - cannot contain the username
//  if all requirements are, return true.
//  Otherwise: false

// isValidPassoword('89Fjj1nms', 'dogluvr'); //true
// isValidPassoword('dogLuvr123!', 'dogLuvr') //false
// isValidPassoword('hello1', 'dogLuvr') //false

// function isValidPassoword(password, username) {
//   if (password.length < 8) {
//     return false;
//   }
//   if (password.indexOf(" ") !== -1) {
//     return false;
//   }
//   if (password.indexOf(username) !== -1) {
//     return false;
//   }
//   return true;
// }

// Method 2
function isValidPassoword(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const tooSimilar = password.indexOf(username) !== -1;

  if (!tooShort && !hasSpace && !tooSimilar) return true;
  return false;
}

console.log(isValidPassoword("89Fjj1nms", "dogluvr")); //true
console.log(isValidPassoword("dogLuvr123!", "dogLuvr")); //false

// CHALLENGE #2
// Write a function to find the average value in an array of numbers
// avg([0,50]) //25
// avg([75,76,80,95,100]) //85.2

function average(arr) {
  let total = 0;
  // Loop over each element
  for (let i = 0; i < arr.length; i++) {
    // Add them together
    total = total + arr[i];
  }
  // Divide by number of elements
  return total / arr.length;
}

console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));

// CHALLENGE #3 - PANGRAM
function isPangram(sentence) {
  let lowerCased = sentence.toLowerCase();
  let string = "abcdefghijklmnopqrstuvwxyz";
  for (let char of string) {
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}

console.log(isPangram("The five boxing wizards jump quickly"));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// CHALLENGE #4 - PLAYING CARDS
// function getCard() {
//   const values = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "J",
//     "Q",
//     "K",
//     "A",
//   ];
//   const idx = Math.floor(Math.random() * values.length);
//   const value = values[idx];

//   const suits = ["clubs", "spades", "hearts", "diamonds"];
//   const suitIdx = Math.floor(Math.random() * suits.length);
//   const suit = suits[suitIdx];
//   return {
//     value: value,
//     suit: suit,
//   }
// }

// Refactoring

function pick(arr) {
  // return random element from an array
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = ["clubs", "spades", "hearts", "diamonds"];

  return {
    value: pick(values),
    suit: pick(suits),
  };
}

console.log(getCard());
