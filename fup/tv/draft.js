let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let preco = +input();
let qtd_parcelas = +input();
let juros = ((qtd_parcelas - 1) * 5)/100;
let preco_final = preco + (preco*juros);
let val_parcela = preco_final/qtd_parcelas;

console.log(val_parcela.toFixed(2));
console.log(preco_final.toFixed(2));
