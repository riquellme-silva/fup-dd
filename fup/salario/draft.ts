let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let salario: number = +input();

if (salario <= 1000) {
    salario = salario + (salario*0.2);
} else if (salario <= 1500) {
    salario = salario + (salario*0.15);
} else if (salario <= 2000) {
    salario = salario + (salario*0.1);
} else {
    salario = salario + (salario*0.05);
}

write(salario.toFixed(2));