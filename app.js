/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

foods.push("pizza", "cheeseburger");

console.log("Exercise 2 result:", foods);

foods.unshift("taco");

console.log("Exercise 3 result:", foods)

const favFood = foods[1];

console.log("Exercise 4 result:", favFood);

foods.splice(2, 0, "tofu");

console.log("Exercise 5 result:", foods);

foods.splice(1, 1,"sushi", "cupcake");

console.log("Exercise 6 result:", foods);

const yummy = foods.slice(1, 3);

console.log("Exercise 7 result:", yummy);

const soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 result:", soyIdx);

const allFoods = foods.join("->");

console.log("Exercise 9 result:", allFoods);

const hasSoup = foods.includes("soup");

console.log("Exercise 10 result:", hasSoup);

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

for (const x of nums) {
    if x = odd
    odds.push(x);
}

console.log(odds);