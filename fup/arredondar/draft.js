let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let operacao = input();
let nota = +input();

// cria as funções para cal
function ceil(nota) {
 return Math.ceil(nota);
}
function floor(nota){
 return Math.floor(nota);
} 

function round(nota){
  if (nota%1 >= 0,5){
   return ceil(nota);
  } else{
   return floor(nota);
  }
}

if (operacao == "c"){
  console.log(ceil(nota));
} else if (operacao == "f"){
  console.log(floor(nota));
} else {
  console.log(round(nota));
}