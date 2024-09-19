let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let n1 = +input();
let n2 = +input();
let notaF = +input();
let media = (n1+n2)/2;

if (media >= 7 ){
  console.log("aprovado");
} else if (media < 4){
  console.log("reprovado");
} else {
  MediaFinal = (notaF + media)/2;
  if (MediaFinal >= 5 ){
    console.log("aprovado na final");
  } else{
    console.log("reprovado na final");
  }
}
