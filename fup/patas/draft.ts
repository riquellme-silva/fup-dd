let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};


let chico: number = +input();
let cebola: number = +input();
let qtdanimais: number = +input();

let patas: number = 0;

for (let i = 0; i <= qtdanimais; i++) {
    let animal: string = input();
    if (animal == "g") {
        patas += 2;
    } else if (animal == "c") {
        patas += 4;
    } else if (animal == "v"){
        patas += 4;
    }

}

let diferenca1: number = Math.abs(chico-patas);
let diferenca2: number = Math.abs(cebola-patas);

write(patas)
if (diferenca1 == diferenca2) {
    write("empate");
} else if (diferenca1 < diferenca2) {
    write("Chico Bento");
} else {
    write("Cebolinha");
}