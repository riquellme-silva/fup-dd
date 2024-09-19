let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);


let hora = input();
let min = input();
let dia = input();
let mes = input();
let ano = +input();

let vhora = hora.padStart(2,"0");
let vmin = min.padStart(2,"0");
let vdia = dia.padStart(2,"0");
let vmes = mes.padStart(2,"0");
let vano = ano.toString();
let vvano;
if (ano >= 1000){
  vvano = vano.slice(-2);
} else{
  vvano = vano.slice(1);
}

console.log(vhora + ":" + vmin+ " " + vdia + "/" + vmes + "/" + vvano);