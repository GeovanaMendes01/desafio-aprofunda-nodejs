//1

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function imprimePares(N){
    for(let i = 0; i<=N; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

rl.question('Digite um número: ', function(resposta){
    let numero = parseInt(resposta);

    console.log(`Os números pares de 0 até ${numero} são:`);
    imprimePares(numero);
    rl.close();
})

//2

function somaArray(numeros){
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

let numeros = [1,2,3,4,5];
console.log(somaArray(numeros));

//3

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ePrimo(numero){
    if(numero < 2){
        return false;
    }
    for(let i = 2; i < numero; i++){
        if(numero % i == 0){
            return false;
        }
    }    
    return true;   
}   


rl.question('Digite um número: ', function(resposta){
    let numero = parseInt(resposta);

    if(ePrimo(numero)){
        console.log('true');
    }else{
        console.log('false');
    }    

    rl.close();
});

//4

function fizzBuzz(){
    for(let i = 1; i <=50; i++){
        if(i%3==0 && i%5==0){
            console.log('FizzBuzz')
        }else if(i%3==0){
            console.log('Fizz')
        }else if(i%5==0){
            console.log('Buzz')
        }else{
            console.log(i)
        }
    }
}

fizzBuzz();

//5

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contaVogais(palavra){
    let cont = 0;
    const vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'à', 'â', 'ã', 'é', 'ê', 'í', 'ó', 'ô', 'õ', 'ú'];
    for(let i=0; i<palavra.length; i++){
        const letra = palavra[i];
        
        if(vogais.includes(letra)){
            cont +=1;
        }
    }
    return cont;
}

rl.question('Digite uma string: ', function(resposta){
    let palavra = resposta.toLowerCase();

    console.log(contaVogais(palavra));
    rl.close();
})

//6

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

function tabuada(numero){
    for(let i = 1; i <= 10; i++){
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

rl.question('Digite um número: ', function(resposta){
    let numero = parseInt(resposta);

    tabuada(numero);
    rl.close();
})

//7

const readline = require('readline');   

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverteString(palavra){
    let palavraInvertida = '';
    for(let i=palavra.length-1; i>=0; i--){
        palavraInvertida += palavra[i];
    }
    return palavraInvertida;   
}

rl.question('Digite uma string: ', function(resposta){
    let palavra = resposta;

    console.log(inverteString(palavra));
    rl.close();
});

//8

function maiorNumero(numeros){
    return numeros.reduce((maior, numero) => {
        if(numero > maior){
            return numero;
        }
        return maior;
    });
        
}

let numeros = [3, 10, 6, 2];
console.log(maiorNumero(numeros));

//9

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ePalindromo(palavra){
    let palavraInvertida = '';
    for(let i=palavra.length-1; i>=0; i--){
        palavraInvertida += palavra[i];
    }
    if(palavra == palavraInvertida){
        return true;
    }
    return false;
}

rl.question('Digite uma string: ', function(resposta){
    let palavra = resposta.toLowerCase();

    if(ePalindromo(palavra)){
        console.log('true');
    }else{
        console.log('false');
    }
    
    rl.close();
});

//10

function calculaMedia(notas, notas2) {
    let resultado = '';

    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;
    if(media>=7){
        resultado = 'Aprovado';
    }else{
        resultado = 'Reprovado';
    }

    return `${resultado} - Média: ${media.toFixed(1)}`;
}

let notas = [8, 7, 6];
let notas2 = [5, 6, 4];
console.log(calculaMedia(notas), calculaMedia(notas2));

