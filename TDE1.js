function soma(a, b){
    return console.log(a + b);    
}

function subtrair(a, b){
    return console.log(a - b);
}

function dividir(a, b){
    return console.log(a / b);
}

function multiplicacao(a, b){
    return console.log(a * b);
}

function verificaPar(num){
    return num % 2 == 0;
    /*if(num % 2 == 0){
        return console.log(num + " ELE É PAR!");
    }else{
        return console.log(num + " ELE É IMPAR!");
    }*/
}

const n1 = 5, n2 = 3;

soma(n1, n2);
subtrair(n1, n2);
dividir(n1, n2);
multiplicacao(n1, n2);

//verificaPar(14);
const parOuImpar = verificaPar(15) ? "É PAR!" : "É IMPAR";
console.log(parOuImpar);


