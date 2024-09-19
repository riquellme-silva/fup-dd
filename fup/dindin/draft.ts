let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtdvendid: number = +input();

let qtdmanha: number = 0;
let qtdtarde: number = 0;

let qtdchoco: number = 0;
let qtdlima: number = 0;

while (qtdvendid > 0) {
    let entrada: string[] = input().split(" ");
    let sabor: string = entrada[0];
    let turno: string = entrada[1];

    if (sabor == "c") {
        qtdchoco++;
    } else {
        qtdlima++;
    }

    if (turno == "m") {
        qtdmanha++;
    } else {
        qtdtarde++;
    }

    

    qtdvendid--;
}
let sabor_win: string = "";
let turno_los: string = ""

if (qtdchoco > qtdlima) {
    sabor_win = "c"
} else if (qtdchoco == qtdlima) {
    sabor_win = "empate";
} else {
    sabor_win = "l";
}

if (qtdmanha < qtdtarde) {
    turno_los = "m";
} else if (qtdmanha == qtdtarde) {
    turno_los = "empate";
} else {
    turno_los = "t"
}

write(sabor_win + "\n" + turno_los);