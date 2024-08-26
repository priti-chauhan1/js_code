// const readlinesync = require("readline-sync");
// let n = parseInt(readlinesync.question("Enter the value of x number : "));
// let sum = 0;
// let count = 0;
// readlinesync.question("Enter student marks(0-100) with space end with -1: ");
// for (let i = 0; i < grades.length; i++) {
//   const marks = parseInt(grades[i]);
// if (marks === -1) {
//     break;
//   }
// if (grade >= 0 && grade <= 100) {
//     sum += marks;
//     count++;
//   }
// }
// const average = count > 0 ? Math.round(sum / count) : 0;
// console.log(average);


const readlinesync = require('readline-sync')
let sum = 0;
let count = 0;
let grade;
while (true) {
    grade = parseInt(readlinesync.question("Enter a grade (or -1 to end):"));
    if (grade === -1) {
        break;
    }
sum += grade;
    count++;
}
let average = count > 0 ? Math.round(sum / count) : 0;
console.log(average);
