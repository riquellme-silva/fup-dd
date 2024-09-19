let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let jogadores: number = +input();
let pontuacao: number[] = [];
for (let i =0 ; i < jogadores; i++) {
    let pedras: string[] = input().split(" ");
    if (+pedras[0] >= 10 && +pedras[1] >= 10 ){
        pontuacao.push(Math.abs(+pedras[0] - +pedras[1]));
    } else {
        pontuacao.push(Number.MAX_VALUE);
    }
}

let refe: number = -1;
for (let i = 0; i < jogadores; i++) {
    if (refe == -1) {
        if (pontuacao[i] != Number.MAX_VALUE){
            refe = i;
        }
    }else if (pontuacao[i] < pontuacao[refe]) {
        refe = i;
    }
}

if (refe == -1) {
    write("sem ganhador")
} else {
    write(refe);

}

