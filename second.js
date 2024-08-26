const readlinesync = require('readline-sync')
let number = parseInt(readlinesync.question("Enter the number : "))
// const input = 123
// let number = number
let sum =0;
while(number>0){
    const digit = number % 10
sum+=digit*digit
number = Math.floor(number/10);

}
console.log("sum",sum)
