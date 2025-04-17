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

const usuariocadastrado = "hunter"
const senhacadastrada = "1234"


const usuario = prompt("Digite o nome do usuario: ");
const senha = prompt("Digite a senha: ");

if (usuario === usuariocadastrado && senha === senhacadastrada){
    alert("Login realizado com sucesso");
} else{
    alert("Falha na autenticação.")
}

// 6 - Vamos criar um programa que calcule a média de 7 notas e exiba uma mensagem indicando se o aluno foi aprovado ou reprovado. Considere que a média mínima para aprovação é 6. Exemplifique e demonstre  a saída! 

let soma = 0;

for (let i = 1; i <= 7; i++) {
  let nota = parseFloat(prompt(`Digite a nota ${i}:`));

  if (isNaN(nota)) {
    alert("Você digitou um valor inválido. Tente novamente.")
  }

  soma += nota;
}

let media = soma / 7;

if (media >= 6) {
  alert(`Média: ${media.toFixed(2)}\nAluno aprovado!`);
} else {
  alert(`Média: ${media.toFixed(2)}\nAluno reprovado.`);
}

// Questão 7

let notas = [7.5, 6.0, 8.0, 5.5, 6.5, 7.0, 6.0];

let soma1 = 0;
for (let i = 0; i < notas.length; i++) {
  soma1 += notas[i];}

  console.log("Média do aluno:", media.toFixed(2));

  if (media >= 6) {
    console.log("Resultado: Aprovado!");
  } else {
    console.log("Resultado: Reprovado.");
  }

  //Questão 8

  let texto = "Tecnologia é um produto da ciência e da engenharia que envolve um conjunto de instrumentos, métodos e técnicas que visam a resolução de problemas.";

  let primeiraPosicaoEm = texto.indexOf("em");
  let ultimaPosicaoIa = texto.lastIndexOf("ia");
  let contemCiencia = texto.includes("ciência");
  let contemMetodos = texto.includes("métodos");

  console.log("1) Primeira posição de 'em':", primeiraPosicaoEm);
console.log("2) Última posição de 'ia':", ultimaPosicaoIa);
console.log("3) O texto contém 'ciência'?", contemCiencia);
console.log("4) O texto contém 'métodos'?", contemMetodos);

//Questãao 9
let variavel = "123.45";
variavel = parseFloat(variavel);
console.log(typeof variavel);
