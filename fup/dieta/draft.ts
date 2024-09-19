let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd_dias: number = +input();
let calorias_total: number = 0

for (let  i = 0; i <= qtd_dias; i++) {
    calorias_total += +input();
   
}
let media: number = calorias_total/qtd_dias
write(media.toFixed(1));