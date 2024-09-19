let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let B: number = +input();
let T: number = +input();

let altura: number = 70;
let base: number = 160;
let areaT: number = base*altura;

let area1: number = ((B+T)*altura)/2

if (area1 == areaT/2) {
    write("0");
} else if (area1 > areaT/2) {
    write("1");
} else{
    write("2");
}
// write(area1);
// write(areaT/2);
