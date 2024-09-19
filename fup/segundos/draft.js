let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let segundos = +input();

let horas = (segundos / 3600);
let minutos = (segundos % 3600) / 60;
segundos = (segundos % 3600) % 60;

console.log(parseInt(horas)+":"+parseInt(minutos)+":"+parseInt(segundos));
