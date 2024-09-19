function count(vet: number[], value: number): number {
    let contador: number = 0
    for (let elem of vet) {
        if (elem == value){
            contador++;
        }
    }
    return contador;
}

function sum(vet: number[]): number {
    let soma: number = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return soma;
}

function average(vet: number[]): number {
    return sum(vet)/vet.length;
}

function more_men(vet: number[]): string {
    let qtdH: number = 0;
    let qtdm: number = 0;
    for (let elem of vet) {
        if (elem > 0) {
            qtdH++;
        }
        if (elem < 0) {
            qtdm++;
        }
    }
    if (qtdH == qtdm) {
        return "draw";
    }
    if (qtdH > qtdm) {
        return "men";
    }
    return "women";
}

function half_compare(vet: number[]): string {
    let metade1: number[] = vet.slice(0, vet.length/ 2);
    let metade2: number[] = vet.slice(vet.length/2, vet.length);

    let media1: number = average(metade1);
    let media2: number = average(metade2);

    if (media1 > media2) {
        return "first";
    } 
    if (media2 > media1) {
        return "second"
    }
    return "draw";
}

function sex_battle(vet: number[]): string {
    let homens: number[] = [];
    let mulheres: number[] = [];

    for (let elem of vet) {
        if (elem > 0) {
            homens.push(elem);
        } else {
            mulheres.push(elem);
        }
    }
    
    let mediaH: number = average(homens);
    let mediaM: number = average(mulheres);

    if (mediaH > mediaM) {
        return "men";
    }
    if (mediaM > mediaH) {
        return "women";
    }
    return "draw";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };