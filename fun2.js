// Write a function that takes a string and returns the number of vowels in the string.
const readlineSync = require('readline-sync');
function countVowels() {
  let numStrings = parseInt(readlineSync.question("Enter the number of strings: "));
  let arr = [];
  for (let i = 0; i < numStrings; i++) {
    arr[i] = readlineSync.question(`Enter string ${i + 1}: `);
  }
  function countVowelsInString(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  for (let i = 0; i < arr.length; i++) {
    let vowelCount = countVowelsInString(arr[i]);
    console.log(`Number of vowels in "${arr[i]}": ${vowelCount}`);
  }
}
countVowels();
console.log("rani")
countVowels();