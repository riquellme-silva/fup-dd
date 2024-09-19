let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let numeros: number[] = [];
for (let i = 0; i < 5; i++) {
    let entrada: number = +input();
    numeros.push(entrada);
}

let menor: number = numeros[0];

for (let i = 0; i < 5; i++) {
    if (menor > numeros[i]) {
        menor = numeros[i];
    }
}

write(menor);