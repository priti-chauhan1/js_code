//ALL THE NUMBER WHICH IS COMPLETELY DEVIDE THAT NUMER WITHOUT LEAVING ANY REMAINDER

//EG :- NUMBER % 3 === O
// const readlinesync = require('readline-sync')
// let num = parseInt(readlinesync.question("Enter the number: "))
// //let num =prompt("Enter a number");
// if(num % 5 === 0){
//     console.log(num,"is multiple of 5")
// }else{
//     console.log(num,"is not multiple of 5")
// }

//2. Write a code whichcan give grades to students accrding to their scores.
// 80 - 100, A
// 70 - 89,B
// 60 - 69,C
// 50 - 59,D
//0 - 49,F
const readlineSync = require("readline-sync");
let score = parseInt(readlineSync.question("Enter the score of the students: "));
// let score = 45;
let grade;
if (score >= 90 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 89) {
  grade = "B";
} else if (score >= 60 && score <= 69) {
  grade = "C";
} else if (score >= 50 && score <= 59) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("According to your score : your score was :-", grade);
