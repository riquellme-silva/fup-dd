let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let v1: number = +input();
let v2: number = +input();
let v3: number = +input();

if (v1 > v2 && v1 < v3 || v1 < v2 && v1 > v3) {
    write(v1);
} else if (v2 > v1 && v2 < v3  || v2 < v1 && v2 > v3){
    write(v2);
} else{
    write(v3);
}