// const readlinesync = require('readline-sync');
// let x = parseInt(readlinesync.question("Enter the value of x number : "));
// let y = parseInt(readlinesync.question("Enter the value of y number : "));

// if (x > 0 && y > 0) {
//   console.log(1);
// } else if (x < 0 && y > 0) {
//   console.log(2);
// } else if (x < 0 && y < 0) {
//   console.log(3);
// } else if (x > 0 && y < 0) {
//   console.log(4);
// } else if (x == 0 || y == 0) {
//   console.log(0);
// } else {
//   console.log("none");
// }
const readlineSync = require('readline-sync');
let x = parseInt(readlineSync.question("Enter the value of x number: "));
let y = parseInt(readlineSync.question("Enter the value of y number: "));
if (x > 0 && y > 0) {
  console.log(1);  
} else if (x < 0 && y > 0) {
  console.log(2);  
} else if (x < 0 && y < 0) {
  console.log(3);  
} else if (x > 0 && y < 0) {
  console.log(4);  
} else if (x == 0 || y == 0) {
  console.log(0);
  }
