//1 -> Escreva na tela todos os números pares de 0 a 100 
const questao1 = () => {

    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    } 
}

function questao2(){
    let nArray = [2,4,8,10];
    let soma = 0;

    for(let i = 0; i < nArray.length; i++){
        soma += nArray[i];
    }
    console.log(soma);
}

function questao3(){
    let removeArray = [-1, 1, -2, 2, -3, 3];

    for(let i = 0; i < removeArray.length; i++){
        if(removeArray[i] >= 0){
            console.log(removeArray[i])
        }
    }
}

function questao4(){
    let multiplicaArray = [1, 2, 3, 4, 5];
    let multi = 0;

    for(let i = 0; i < multiplicaArray.length; i++){
        multi = multiplicaArray[i] * 2;
        console.log(multi)
    }
}

questao1();
console.log()

questao2();
console.log()

questao3()
console.log()

questao4();
console.log()


