let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let qtd1 = +input();
let qtd2 = +input();
let qtd3 = +input();

let val1 = +input();
let val2 = +input();
let val3 = +input();
let total = (val1 * qtd1) + (val2 * qtd2) + (val3 * qtd3);

let dinheiro = +input();
let troco = dinheiro - total;


console.log(troco.toFixed(2));