let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let entrada: string[] = input().split(" ");

let n1: number = +entrada[0];
let n2: number = +entrada[1];

let diferenca: number = n1-n2;

write(Math.abs(diferenca));