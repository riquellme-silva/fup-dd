let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};



function num_to_nome(value: number): string{
    let nomes: string[] = ["", "A", "2","3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K"]
    return nomes[value];
}

let qtd: number = +input();
let cartas: number[] = input().split(" ").map(Number);

let saida: string[] = [];
for (let elem of cartas) {
    saida.push(num_to_nome(elem));
}

write(`[${saida.join(", ")}]`);

// write("[","");
// for (let i = 0; i < saida.length; i++) {
//     if (i != 0) {
//         write(", ", "");

//     }
//     write(saida[i], "");

// }
// write("]");

