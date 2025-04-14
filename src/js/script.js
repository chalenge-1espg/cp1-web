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

//  4 - Faça um programa que que faça uma repetição até 50 (usando for )apresentando  a mensagem no console, o valor é:

for (let i=0;i<51;i++){
         console.log("o valor de é", i)
 }
    
//  5 - Crie um programa que receba um nome de usuário e uma senha e verifique se eles correspondem aos   dados de um usuário cadastrado. Considere que o usuário cadastrado possui nome de usuário "admin" e  senha "1234". O programa deve exibir uma mensagem indicando se o login foi realizado com sucesso ou   se houve falha de autenticação. Exemplifique e demonstre a saída





