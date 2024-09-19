let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let num = +input();

if (num == 0){
  console.log(0);
} else if(num > 0){
  console.log("+");
} else {
  console.log("-");
}