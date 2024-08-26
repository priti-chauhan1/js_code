const readlinesync = require('readline-sync');
let n = parseInt(prompt("Enter the number of the grade element: "))
let sum = 0;
let count = 0;
let grade;

while (true) {
    grade = parseInt(prompt("Enter a grade (or -1 to end):"));
if (grade === -1) {
        break;
    }
sum += grade;
    count++;
}
let average = count > 0 ? Math.round(sum / count) : 0;
console.log(average);
