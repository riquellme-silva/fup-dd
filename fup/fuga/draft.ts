let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string[] = input().split(" ");
let helico: number = +entrada[0];
let police: number = +entrada[1];
let fugitivo: number = +entrada[2];
let direcao: number = +entrada[3];

while (true) {
    fugitivo = fugitivo + direcao;

    if (fugitivo > 15) {
        fugitivo = 0;
    } 
    if (fugitivo < 0) {
        fugitivo = 15;
    }


    if (helico == fugitivo) {
        write("S");
        break
    } else if (fugitivo == police) {
        write("N")
        break
    }
}
