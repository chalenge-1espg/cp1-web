//1  - Como declarar uma variável com valor undefined, vazio e com valor em JavaScript? Exemplifique e demonstre a saída do valor da variável!

let indefinida;
console.log(typeof indefinida);

let vazia = []
console.log(typeof vazia);

let valor = 1
console.log(typeof valor);

//2 - Como usar o operador os operadores( != , ==, >= ) em JavaScript? Exemplifique e demonstre a saída!

const a = 10
const b = 20

console.log(a >= b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);

// 3 -  Escreva um programa(usando Switch case) que calcula o índice de massa corporal (IMC) de uma pessoa e exibe uma mensagem indicando se ela está abaixo, no peso ideal ou acima do peso. Exemplifique e demonstre a saída!

const peso = prompt('qual o seu peso? (em kg)' )
const altura = prompt('qual a sua altura? (em M)')
const imc = peso / (altura * altura)
console.log(imc);

switch (imc){
    case imc >= 24,9:
        alert(`voce esta acima do peso`);
        break
    case imc <= 18,5:
        alert(`voce esta abaixo do peso`)
        break
    default:
        alert(`voce esta no peso ideal`)
}







