var readlineSync = require('readline-sync');
let readline = () : string => readlineSync.question();

let userName = readline();
console.log('Hi ' + userName + '!');
console.log("oi");

let a = +input();
let b = +input();
let c = +input();

console.log(a + b + c);