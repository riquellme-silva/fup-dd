let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num1 = +input();
let num2 = +input();

let result = num1/num2;
let resto = num1%num2;

console.log(result | 0);
console.log(resto);
console.log(result.toFixed(2));