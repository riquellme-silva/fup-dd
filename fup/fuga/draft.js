let __lines = require("fs").readFileSync(0).toString().split("\n");
let input = () => __lines.length === 0 ? "" : __lines.shift();
let write = (text, end="\n") => process.stdout.write("" + text + end);

let linha = input().split(" ");
//write(linha);

let helico = +linha[0];
let police = +linha[1];
let fugitivo = +linha[2];
let direcao = +linha[3];

while (true){
  fugitivo = fugitivo + direcao;

  if (fugitivo > 15){
    fugitivo = 0;
  }
  if (fugitivo < 0){
    fugitivo = 15;
  }

  if (fugitivo === helico){
    write("S");
    break;
  } else if (fugitivo === police){
    write("N");
    break;
  }
}
