
//Write a function that takes a string and reverses the order of the words in the string.//


const readlineSync = require('readline-sync');
function reverseWords(str) {
 let wordsArray = str.split(' ');
  let reversedWordsArray = wordsArray.reverse();
  let reversedWordsString = reversedWordsArray.join(' ');
   return reversedWordsString;
}
let stringToReverse = readlineSync.question("Enter a string to reverse the order of its words: ");
let reversedString = reverseWords(stringToReverse);
console.log("Reversed string:", reversedString); 