let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let A: number = +input();
let B: number = +input();
let C: number = +input();
let raiz1: number = 0;
let raiz2: number = 0;
let delta: number = Math.pow(B,2) - (4 * A * C);

if (delta < 0){
    write("nao ha raiz real");
} else if (delta == 0){
    raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    write(raiz1.toFixed(2));
} else if (delta > 0){
    raiz1 = (-B + Math.sqrt(delta)) / (2 * A);
    raiz2 = (-B - Math.sqrt(delta)) / (2 * A);  
    
    write(raiz1.toFixed(2) + "\n"+ raiz2.toFixed(2))
}