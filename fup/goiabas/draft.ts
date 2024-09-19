let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let capacidade: number = +input();
let qtd_banana: number = +input();
let qtd_goiaba: number = +input();
let qtd_manga: number = +input();

let total_frut: number = qtd_banana+qtd_goiaba+qtd_manga;

let min_gastos: number = Math.ceil(total_frut/capacidade);

write(min_gastos);