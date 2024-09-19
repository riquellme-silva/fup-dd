let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string[] = input().split(" ");

let procurado: number = +entrada[0];
let qtd_elem: number = +entrada[1];

let qtd_procurado: number = 0;

for (let i =0; i < qtd_elem; i++) {
    let elem: number = +input();

    if (elem == procurado) {
        qtd_procurado++;
    }
}

write(qtd_procurado);