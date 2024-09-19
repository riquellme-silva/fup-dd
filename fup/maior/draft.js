let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let chute1 = +input();
let chute2 = input();
let valor = +input();

if (valor == chute1){
   console.log("primeiro");
 } else if((chute2 == "m" && valor > chute1) || (chute2 == "M" && valor < chute1)) {
   console.log("primeiro");
} else{
   console.log("segundo");
}