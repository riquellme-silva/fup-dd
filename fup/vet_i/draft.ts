let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let elementos: number = +input();
let lista: number[] = [];

for (let i = 0; i < elementos; i++) {
    let entradas: number = +input();
    lista.push(entradas);
}

for (let elem of lista) {
    write(elem);
}
