let arr = [6,5,4,3,2,1];
let n = 6;
let evens = [];
let odds = [];
for (let i = 0; i < n; i++) {
  if (arr[i] % 2 === 0) {
    evens.push(arr[i]);
  } else {
    odds.push(arr[i]);
  }
}
let result = evens.concat(odds);
console.log(result);