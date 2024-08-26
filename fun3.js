const readlineSync = require('readline-sync');

function getArray(prompt) {
  let n = parseInt(readlineSync.question(`Enter the number of elements for ${prompt}: `));
  let arr = [];
  for (let i = 0; i < n; i++) {
    let element = parseInt(readlineSync.question(`Enter element ${i + 1}: `));
    arr.push(element);
  }
  return arr;
}

function findCommonElements(arr1, arr2) {
  return arr1.filter(value => arr2.includes(value));
}

let arr1 = getArray("first array");
let arr2 = getArray("second array");

let commonElements = findCommonElements(arr1, arr2);

console.log("Common elements:", commonElements);
