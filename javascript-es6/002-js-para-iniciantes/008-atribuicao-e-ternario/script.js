var scroll = 1000;

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

// Verifica se o cliente possui carro e casa para atribuir true a darCredito, caso contrário, atribui false
if (possuiCarro && possuiCasa) {
  darCredito = true;
} else {
  darCredito = false;
}

console.log(darCredito); // Isso vai imprimir true ou false dependendo das condições
