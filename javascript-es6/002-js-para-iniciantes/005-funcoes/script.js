// Crie uma função para verificar se um valor é Truthy
const valorVerdadeiro = 30;
const valorFalso = "";

function testeValor(valor) {
  if (!!valor) {
    console.log("Valor é True: " + valor); // Valor é True: 30
  } else {
    console.log("Valor é False: " + valor); // Valor é False:
  }
}

testeValor(valorVerdadeiro);
testeValor(valorFalso);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetro(num) {
  const soma = num * 4;
  return console.log(soma);
}

perimetro(25); // 100

const valPerimetro = 72;
perimetro(valPerimetro); // 288

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  return console.log(`${nome} ${sobrenome}`);
}

const meuNome = "Guilherme";
const meuSobrenome = "Bortoletto";

nomeCompleto(meuNome, meuSobrenome); // Guilherme Bortoletto

// Crie uma função que verifica se um número é par
function ehPar(num) {
  if (num % 2 === 0) {
    console.log("É par");
  } else {
    console.log("É impar");
  }
}

const num2 = 10;
const num3 = 13;

ehPar(num2); // É par
ehPar(num3); // É impar

ehPar(68); // É par

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function qualTipo(item) {
  return console.log(typeof item);
}

const algumItemA = "texto";
const algumItemB = 99;
const algumeItemC = true;

qualTipo(algumItemA); // string
qualTipo(algumItemB); // number
qualTipo(algumeItemC); // boolean

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", () => {
  return nomeCompleto(meuNome, meuSobrenome);
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  // precisa dessa var
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));

console.log("-------------------------------------------------");

// Verificação de Maioridade:
// Crie uma função que recebe a idade de uma pessoa como argumento e verifica se ela é maior de idade.
// Se for, imprima "Maior de idade", caso contrário, imprima "Menor de idade".
function idadePessoa(idade) {
  if (idade > 18) {
    console.log("Ela é maior de idade");
  } else {
    console.log("Ela é menor de idade");
  }
}

const claudio = 20;
idadePessoa(claudio);

// Cálculo da Média:
// Crie uma função que recebe três números como argumentos e retorna a média aritmética desses números.
function calMedia(num1, num2, num3) {
  const resultado = (num1 + num2 + num3) / 3;
  return resultado.toFixed(2);
}

const val1 = 20;
const val2 = 35;
const val3 = 72;

console.log(calMedia(val1, val2, val3)); // 42.33

// Conversor de Temperatura:
// Crie uma função que converte uma temperatura em graus Celsius para Fahrenheit.
// A fórmula para essa conversão é: Fahrenheit = Celsius * 9/5 + 32.
function conversorTemperatura(celsius) {
  return (fahrenheit = (celsius * 9) / 5 + 32);
}

const graus = 32;
console.log(conversorTemperatura(graus)); // 89.6

// Verificação de Palíndromo:
// Crie uma função que verifica se uma palavra é um palíndromo.
// Um palíndromo é uma palavra que é lida da mesma forma de trás para frente.
// Por exemplo, "ovo" e "radar" são palíndromos.
function palindromo(palavra) {
  const inverso = palavra.split("").reverse().join("");
  if (palavra === inverso) {
    console.log("A palavra é um palíndromo: " + palavra);
  } else {
    console.log("A palavra não é um palíndromo: " + inverso);
  }
}

const palavraA = "radar";
const palavraB = "Tigre";

palindromo(palavraA); // A palavra é um palíndromo: radar
palindromo(palavraB); // A palavra não é um palíndromo: ergiT

// Contador de Vogais:
// Crie uma função que recebe uma string como argumento e retorna o número de vogais nessa string.
// Considere apenas as vogais 'a', 'e', 'i', 'o' e 'u'.
function contadorDeVogais(frase) {
  frase = frase.toLowerCase();
  const vogais = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < frase.length; i++) {
    // Existe vogais em frase[passando por cada caracter] ? se sim, count ganha +1
    if (vogais.includes(frase[i])) {
      count++;
    }
  }

  return console.log(count);
}

const fraseA = "Teste da frase para a contagem.";
contadorDeVogais(fraseA); // 11
