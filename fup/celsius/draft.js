let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let celsius = input();

let fah = 9/5 * celsius + 32;

console.log(fah.toFixed(6));