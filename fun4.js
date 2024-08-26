// Write a function that takes an array of numbers and returns the largest number in the array.
const readlineSync = require('readline-sync');

function largestNumber() {
  let array = [];
  let n = parseInt(readlineSync.question("Enter the number of elements: "));

  for (let i = 0; i < n; i++) {
    let user_input = parseInt(readlineSync.question(`Enter the ${i + 1}th number: `));
    array.push(user_input);
  }

  return array; 
}
const array = largestNumber(); 
let max = array[0]; 
for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i]; 
  }
}

console.log("The maximum number is: " + max); 










