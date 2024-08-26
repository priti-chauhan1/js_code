// function whoPassed(students) {
//     let passedStudents = [];

//     for (let student in students) {
//         let scores = students[student];
//         let passed = true;

//         for (let score of scores) {
//             let [obtained, total] = score.split('/').map(Number);

//             if (obtained !== total) {
//                 passed = false;
//                 break;
//             }
//         }

//         if (passed) {
//             passedStudents.push(student);
//         }
//     }

//     return passedStudents.sort();
// }

// const a = ({
//     "John" : ["5/5", "50/50", "10/10", "10/10"],
//     "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
//     "Adam" : ["8/10", "22/25", "3/5", "5/5"],
//     "Barry" : ["3/3", "20/20"]
// });

//   // ➞ ["Barry", "John"]

// console.log( whoPassed(a));

// console.log("object")

// function sum(){
//     return 'object'
// }

// let a = sum()
// console.log(a)

// function sum(a,b){

//    return a+b
// }
// let ans = sum(4,6)
// console.log(ans)

// function printName(name){
//   return name
// }
// let ans = printName('priti')
// console.log(ans)

// const readlineSync = require('readline-sync');
// function evenNumber(){
// let n = readlineSync.question('Enter a number: ');
//    for (let i = 0; i <= n; i++) {
//     if(i % 2 === 0){
//         console.log(i)
//     }

//    }
// }
// evenNumber();

// const readlineSync = require("readline-sync");
// function SumoddNum() {
//   let n = (readlineSync.question(`Enter the number: `));
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//       sum += i;
//     }
//   }
// }
// SumoddNum();

// function fruit() {

//    name = "apple";
//   let price = 20;
//   console.log(name);
//   console.log(price);

// }
// fruit()

// function countBoomerangs(arr) {
//   let boomerangCount = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
//       boomerangCount++;
//     }
//   }
//   return boomerangCount;
// }
// let arr = [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2];
// console.log(countBoomerangs(arr));


// function isPositiveDominant(arr) {
//   let positives = new Set();
//   let negatives = new Set();

//   arr.forEach(num => {
//       if (num > 0) {
//           positives.add(num);
//       } else if (num < 0) {
//           negatives.add(num);
//       }
//   });

//   return positives.size > negatives.size;
// }
// let arr = ([5, 99, 832, -3, -4]);
// console.log(isPositiveDominant(arr));


function itemsPurchased(storeItems, wallet) {
  let affordableItems = [];
  let walletAmount = parseInt(wallet.replace(/[$,]/g, ''));

  for (let item in storeItems) {
      let itemPrice = parseInt(storeItems[item].replace(/[$,]/g, ''));
      if (itemPrice <= walletAmount) {
          affordableItems.push(item);
      }
  }

  if (affordableItems.length === 0) {
      return "Nothing";
  }

  return affordableItems.sort();
}
 console.log(itemsPurchased(storeItems))

console.log(true)