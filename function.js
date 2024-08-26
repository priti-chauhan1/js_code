// Write a function that takes an array of numbers and returns the sum of all the even numbers in the array.
const readlineSync = require("readline-sync");
function sumOfNumbers() {
  let n = parseInt(readlineSync.question("Enter the number of elements: "));
  let arr = [];
  let sum_of_even = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = parseInt(readlineSync.question(`Enter the number${i}th: `));
    arr.push(arr);
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 == 0) {
      sum_of_even += arr[i];
    }
  }
  console.log(sum_of_even);
}
sumOfNumbers();
console.log("rani");
