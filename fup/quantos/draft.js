let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);
let n1 = +input();
let n2 = +input();
let n3 = +input();

if (n1 == n2 && n1 == n3){
  console.log(3);
  
} else if (n1 == n2 || n1 == n3){
  console.log(2);
} else if (n1 == n2 || n1 == n3 || n2 == n3){
  console.log(1);
} else{
  console.log(0);
}