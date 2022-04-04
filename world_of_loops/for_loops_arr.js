// Looping through an array
const examScores = [98, 77, 84, 91, 57, 66];
for (let i = 0; i < examScores.length; i++) {
  console.log("Index:", i, "Value: ", examScores[i]);
}

// Looping through an array of animals
const animals = ["lion", "tiger", "bear"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

// Looping through an array of objects
const myStudents = [
  {
    firstName: "Zeus",
    grade: 86,
  },
  {
    firstName: "Artemis",
    grade: 97,
  },
  {
    firstName: "Hera",
    grade: 72,
  },
  {
    firstName: "Apolio",
    grade: 90,
  },
];

for (let i = 0; i < myStudents.length; i++) {
  // Create a variable called students and assign it the indexed array
  let student = myStudents[i];
  // Outputting the result
  console.log(`${student["firstName"]} scored ${student.grade}`);
}

// Iterating a string backwards
const word = "stressed";
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--) {
  reversedWord += word[i];
  console.log(i, word[i]);
  console.log(reversedWord);
}
console.log("########################");
console.log(reversedWord);
console.log("########################");

// Accumulating the grade and finding the average
let total = 0;
for (let i = 0; i < myStudents.length; i++) {
  // Create a variable called students and assign it the indexed array
  let student = myStudents[i];
  total += student.grade;
}
console.log(`total grade accumulated: ${total}`);
// Calculating the Average
console.log(`Average is : ${Math.trunc(total / myStudents.length)}`);
