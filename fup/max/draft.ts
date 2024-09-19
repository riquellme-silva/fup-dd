let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1: number = +input();
let n2: number = +input();

if (n1 == n2){
    write(n1);
} else if (n1 > n2){
    write(n1);
} else {
    write(n2);
}