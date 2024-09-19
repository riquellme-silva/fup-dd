let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let tabuleiro: number = +input();
let x: number = +input();
let y: number = +input();
let direcao: string = input();
let segundos: number = +input();

if (direcao == "U") {
    y -= segundos;
} else if (direcao == "D") {
    y += segundos;
} else if (direcao == "L") {
    x -= segundos;
} else if (direcao == "R") {
    x += segundos;
}



write(x + " "+ y);


