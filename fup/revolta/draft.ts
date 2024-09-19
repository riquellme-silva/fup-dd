let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tam_veor: number = +input();
let soma_impares: number = 0;
let soma_pares: number = 0;

for (let i = 0; i < tam_veor; i++) {
    let entrada: number = +input();

    if (entrada%2 == 0) {
        soma_pares += entrada;
    } else {
        soma_impares += entrada;
    }
}

if (soma_impares == soma_pares) {
    write("empate");
} else if (soma_impares > soma_pares) {
    write("soldados");
} else {
    write("rebeldes");
}