function inside(vet: number[], value: number): boolean {
     for (let elem of vet) {
        if (elem == value) {
            return true;
        }
     }
     return false;
}

function index_of(vet: number[], value: number): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] == value) {
            return i;
        }
    }
    return -1;
}

function find_if(vet: number[]): number {
    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0) {
            return i;
        }
    }   
    return -1;
}

function min_element(vet: number[]): number {
    let refe: number = -1;

    if (vet.length == 0) {
        return -1;
    }
    for (let i = 0; i < vet.length; i++) {
        if (refe == -1 ||vet[i] < vet[refe]) {
            refe = i;
        }
    }
    return refe;
}

function find_min_if(vet: number[]): number {
    let refe: number = -1;
    if (vet.length == 0) {
        return -1;
    }

    for (let i = 0; i < vet.length; i++) {
        if (vet[i] > 0 ) {
            if (refe == -1 || vet[i] < vet[refe]) {
                refe = i;

            }
        }
    }
    return refe;
}


if (require.main === module) {
    console.log("Rodando o arquivo do estudante");
}

export { inside, index_of, find_if, min_element, find_min_if };
