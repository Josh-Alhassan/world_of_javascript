// Nested Objects in an array
const shoppingCart = [
  {
    product: "T-shirt",
    price: 3000,
    quantity: 1,
  },
  {
    product: "Water Bottle",
    price: 4000,
    quantity: 4,
  },
  {
    product: "Eye glass",
    price: 1000,
    quantity: 1,
  },
  {
    product: "Hoodie",
    price: 5000,
    quantity: 1,
  },
];

console.log(shoppingCart);
console.table(shoppingCart);

// Accessing Individual Nested Objects
const indexTwoObj = (shoppingCart[2].price += 2000);
console.log(indexTwoObj);
console.log(shoppingCart);

// Summing the entire price of products
const sumOfAllPrices =
  shoppingCart[0].price +
  shoppingCart[1].price +
  shoppingCart[2].price +
  shoppingCart[3].price;

console.log(`Sum of all Product Items is  ${sumOfAllPrices}`);

// Looping through the shopping cart arrays and summing the product prices
let loopedSumPrice = 0;
// Buggy: Look into it later
for (let i = 0; i < shoppingCart.length; i++) {
  loopedSumPrice = shoppingCart[i].price + shoppingCart[i].price;
}
console.log("Total Item Priced " + loopedSumPrice);

// Accessing Nested Arrays in Objects
const student = {
  firstName: "Alhassan",
  lastName: "Abel",
  strengths: ["Coding", "Music", "Maths"],
  exams: {
    midterm: 92,
    final: 98,
  },
};

console.table(student);

// Findig the Average of Midterm and final
const findAvg = (student.exams.midterm + student.exams.final) / 2;
console.log(findAvg);
