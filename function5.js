const readlineSync = require("readline-sync");

function secondMax() {
  let n = parseInt(readlineSync.question("Enter the Number of Elements: "));
  let arr = [];
  for (let i = 0; i < n; i++) {
    user_input = parseInt(readlineSync.question(`Enter the Number ${i + 1}: `));
    arr.push(user_input);
  }
  return arr;
}

const arr = secondMax();
let max = -Infinity;
let secondMaximum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMaximum = max;
    max = arr[i];
  } else if (arr[i] > secondMaximum && arr[i] !== max) {
    secondMaximum = arr[i];
  }
}

if (secondMaximum === -Infinity) {
  console.log("There is no second maximum value.");
} else {
  console.log("Second Maximum:", secondMaximum);
}
