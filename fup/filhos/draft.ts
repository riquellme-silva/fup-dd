let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let filho_mais_novo: number = +input();
let qtd_filhos: number = +input();

while (qtd_filhos > 0) {
    write(filho_mais_novo);
    filho_mais_novo += 2;
    qtd_filhos--
    
}