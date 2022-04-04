for (let i = 1; i <= 10; i++) {
  console.log("Outer Loop:", i);
  for (let j = 10; j >= 0; j--) {
    console.log("Inner Loop:", j);
  }
}

// Looping through an array of game board
const gameBoard = [
  [4, 32, 8, 4],
  [64, 8, 32, 3],
  [8, 32, 16, 4],
  [2, 8, 4, 2],
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
  console.log("################");
  console.log(gameBoard[i]);
  console.log("#############");
  let row = gameBoard[i];
  // Inner Loop
  for (let j = 0; j < row.length; j++) {
    console.log(row[j]);
    totalScore = totalScore + row[j];
  }
}

console.log(totalScore);
