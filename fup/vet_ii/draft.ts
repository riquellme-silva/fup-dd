let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd_elem: number = +input();
let entrada: string[] = input().split(" ");
let saida: string = "[ "

for (let i = 0; i < qtd_elem; i++) {
    saida += entrada[i] + " ";
}

write(saida+"]");