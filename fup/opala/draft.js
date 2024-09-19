let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let vel = +input();
let tempo = +input();
let consumo = +input();

let tempo_h = tempo/60;
let dist = tempo_h * vel;
let desempenho = dist/consumo;

console.log(desempenho.toFixed(2));