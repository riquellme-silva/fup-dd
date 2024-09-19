let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();

op1 = n1+n2;
op2 = n1-n2;
op3 = n1*n2;
op4 = n1/n2;
op5 = n1%n2;

console.log(op1);
console.log(op2);
console.log(op3);
console.log(op4.toFixed(2));
console.log(op5);