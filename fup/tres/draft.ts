var readlineSync = require('readline-sync');
let readline = () : string => readlineSync.question();

function random(inf: number, sup: number): number {
    return Math.floor(Math.random() * (sup-inf)) + inf;
}

let menor: number = 0;
let maior: number = 100;
let numero: number = Math.floor(Math.random()*100);



for (;;) {
    console.log(`Chute um valor entre ${menor} e ${maior}`);
    let chute: number = +readline();
    if (chute == numero)  {
        console.log("acertou!");
        break
    } 
    if (numero < chute) {
        console.log("errou, é menor");
        maior = chute;
    } else {
        console.log("errou, é maior");
        menor = chute;
    }
    if (maior - menor == 2) {
        console.log("você perdeu o jogo!");
        break;
    }
    
}

