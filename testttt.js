// console.log("one");
// console.log("two");

// function hello() {
//     console.log("Hello")
// }

// setTimeout(() => {
// console.log("hello")
// },4000);
// console.log("three");
// console.log("four");

// synchronous programming
// function sum(a, b) {
//   console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// aSynchronous rogramming

// const hello =() =>{
//     console.log("hello")
// }
// setTimeout(hello,3000)

// let age = 19;
// if(age>=18){
// if(age>=60){
//     console.log("senior");
// }else{
//     console.log("Meddle");
// }
// }else{
//     console.log("child");
// }

// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(i,str);
// }

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     });
//   });
// });



// let promise = new Promise((resolve,reject)=>{
//     console.log("I m a promise:)")
//     resolve(123)
// });


// let promise = new Promise((resolve,reject)=>{
//     console.log("I m a promise:)")
//     reject("Error occured")
// });

// let promise = new Promise((resolve,reject)=>{
//     console.log("I m a promise:)")
//     pending("Error occured")
// });