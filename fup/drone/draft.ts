let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a: number = +input();
let b: number = +input();
let c: number = +input();
let h: number = +input();
let l: number = +input();

let area1: number = a*b;
let area2: number = a*c;

let areaJ: number = h*l;

if (area1 <= areaJ || area2 <= areaJ){
    write("S");
} else{
    write("N")
}