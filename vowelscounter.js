// Block of code that performs a specific task can be invoked whenever needed.
// "abc".toUpperCase();
// "abc".toLowerCase();

// const PromptSync = require("prompt-sync");

//  [1,2,3].pop(2)
// [1,2,3].push(4);

// function myFunction(){
//     console.log("welcome to apna college!");
//     console.log("We are learning javascript:>>>>) ");
// //    name :priti,
// //     age: 20,
// //     marks:567,
// //     cgpa:8.9
// }
// myFunction();

// function myFunction(msg){
// console.log(msg)
// }

// myFunction("I want to be a best software programmer in the world:-)");

// lets creat a function which is work for sum of two numbers

// function sum(a,b){
//     // local variables
//     s = a+b;
//     console.log("before return")
//     return s;

//     }
//     let val = sum(3,4);
// console.log(x);
//    console.log(val)

// function sum(a, b) {
//   return a + b;
// }
// // multiplication function
// function mul(a, b) {
//   return a * b;
// }

// now for the same function we can write it in arraw functio in the campact method.

// const arraowSum = (a,b) => {
//     console.log(a+b);
// };
// arraowSum(3,4);
// const arraowMul = (a,b) => {
//     return a*b;
// };
// let result = arraowMul(3,4);
// console.log(result)

// const printHello = () => {
//     console.log("hello!")
// }
// printHello();

// creat a function using the "function" keywords that takes a string as an arguement and returns the number of vowels in the string.
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "o" ||
      char === "e" ||
      char === "u" ||
      char === "i"
    ) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("apnacollege"));

const countVow = (str) =>{
    let count = 0;
    for (const char of str) {
      if (
        char === "a" ||
        char === "o" ||
        char === "e" ||
        char === "u" ||
        char === "i"
      ) {
        count++;
      }
    }
    return count;
  };
  console.log(countVow("apnacollege"));

//in this topic now we gonna read about for each loop i array

// callbackFunction : Here it is a function to execute for each element in the array

let arr2 = [1, 2, 3, 4, 5];
arr2.forEach((val) => {
  console.log("val =",val);
});

let arr1= ["mumbai","delhi","america","bombey"];
arr1.forEach((val,idx,arr) => {
   console.log(val.toString,idx,arr);
 });

// for a  given array of numbers print the square  of each value using the foreach loop.

// let nums = [2,3,4,5,6];
// nums.forEach((nums) =>{
//   console.log(nums*nums)
// });

/*let nums = [67,52,39];
let calcSquare = ((nums) =>{
  console.log(nums*nums)
});
nums.forEach(calcSquare);*/

// Lets use map method

// let nums = [2, 3, 4, 5, 6];
// let newArr = nums.map((val) => {
//   return val * val;
// });
// console.log(newArr);
// let calcSquare = (num) => {
//   console.log(num * num);
// };

// filter method

// Creats a new array of elements that give true for a condition/filter eg :- all even elements
// let arr = [1,2,3,4,5,6,7];
//  let evenArr = arr.filter ((val) => {
// return val % 2 === 0;
// });
// console.log(evenArr)

// print all value which is odd in this array
// let arr = [1,2,3,4,5,6,7];
//  let oddArr = arr.filter ((val) => {
// return val % 2 !== 0;
// });
// console.log(oddArr)

//print all value which is bigger than 3
// let arr = [1,2,3,4,5,6,7];
//  let evenArr = arr.filter ((val) => {
// return val > 3;
// });
// console.log(evenArr)

/* reduce method 
perfoms some operations & reducesthe array to a single value it returns that singles value 
*/
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((previousValue, currentValue) => {
//   return previousValue + currentValue;
// });
// console.log(output);// 10 will be the output


// if i have to print largest elements from the arr.
// let arr = [4,5,1,6];
// const largest = arr.reduce((previousVal, currentVal) => {
//   return previousVal > currentVal ? previousVal : currentVal;
// });
// console.log(largest);// 4 will be the output.


// if i want to print smallest value
// let arr = [1, 2, 3, 4];
// const smallest = arr.reduce((previousVal, currentVal) => {
//   return previousVal < currentVal ? previousVal : currentVal;
// });
// console.log(smallest);// 1 will be the output.


// We are given array of marks of students. filter out of the marks of students that scored 90+.
// let marks = [78,89,90,93,90,91,98,97];
// const result = marks.filter((val) =>  {
// return val > 90
// });
// console.log(result);


// take a number n as input from user.creat an array of numbers from 1 to n.
/*
use the reduce method to calculate sum of all numbers in the array
use thereduce method to calculate the product of all numbers in the array.
*/
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter the number:- "));
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i-1] = i; 
}
console.log(arr);

// // reduce method to sum all the numbers
let sum = arr.reduce((previousval , CurrentVal) => {
return previousval + CurrentVal;
});
console.log("sum = ",sum);

// reduce method for calculate product of all numbers.
let factorial = arr.reduce((previousval , CurrentVal) => {
  return previousval * CurrentVal;
  });
  console.log("factorial = ",factorial);
  

