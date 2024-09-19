let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string[] = input().split(" ");

let a: number = +entrada[0];
let b: number = +entrada[1];

let saida: string = "[ "

while (true) {

    if (a%2 != 0) {
        saida += a + " ";
    } 
    a++;

    if (a < b) {
        continue;
    } else {
        break;
    }
}

write(saida+"]");