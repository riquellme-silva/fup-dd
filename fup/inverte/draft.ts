let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let caractere: string = input();

if (caractere === caractere.toLowerCase()) {
   caractere = caractere.toUpperCase();
} else if (caractere === caractere.toUpperCase()) {
   caractere = caractere.toLowerCase();
}

write(caractere);