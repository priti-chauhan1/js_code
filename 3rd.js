// // const readlinesync=require('readline-sync')
// // let n = parseInt(readlinesync.question("Enter the number of Elements: "))
// // arr =[]
// // for (let i = 0; i < n; i++) {
// //      arr[i]=readlinesync.question(`The ${i+1}th number: `)
// //      arr.push(arr[i])
// //     }
// //     console.log("Entered the arr",arr)
// //     let count=0;
// //     for (let i = 0; i < n-1; i++) {
// //          if (arr[i]===arr[i+1]) {
// //                 count+=1
// //             }
// //              console.log(count)
// //      } 
      
         
const readlineSync = require('readline-sync');
let n = parseInt(readlineSync.question("Enter the number of elements: "));
let arr = [];
let count = {};
let maxNum = null;
let maxCount = 0;
for (let i = 0; i < n; i++) {
    let num = readlineSync.question(`Enter number ${i + 1}: `);
    arr.push(num);
    count[num] = (count[num] || 0) + 1;
    if (count[num] > maxCount) {
        maxCount = count[num];
        maxNum = num;
    }
}
console.log(`${maxNum} is repeated ${maxCount} times.`);
