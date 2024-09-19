let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let valor = +input();
let chute1 = +input();
let chute2 = +input();
// Calcula o valor absoluto para comparação 
let diferenca1 = Math.abs(valor - chute1);
let diferenca2 = Math.abs(valor - chute2);

// o menor valor é o mais proximo
if (diferenca1 < diferenca2){
  console.log("primeiro");
} else if (diferenca1 > diferenca2){
  console.log("segundo");
} else{
  console.log("empate");
}
