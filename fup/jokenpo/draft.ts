let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let jogador1: string = input();
let jogador2: string = input();

if (jogador1 === jogador2){
    write("empate");
} else if (jogador1 == "R" && jogador2 == "S"){
    write("jog1");
} else if (jogador1 == "S" && jogador2 == "P"){
    write("jog1");
} else if (jogador1 == "P" && jogador2 == "R"){
    write("jog1");
} else{
    write("jog2");
}