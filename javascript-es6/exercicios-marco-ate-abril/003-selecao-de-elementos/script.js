// Seleção de Elementos:

// 1 Selecione o elemento com o ID "titulo" e altere seu conteúdo para "Novo Título".
const elementoTitulo = document.getElementById("titulo");

elementoTitulo.textContent = "Novo Título";

// 2 Selecione todos os elementos <p> da página e adicione a classe "destaque" a cada um deles.
const todosPs = document.querySelectorAll("p");
todosPs.forEach((paragrafo) => {
  paragrafo.classList.add("destaque");
});
console.log(todosPs);

// 3 Selecione o primeiro elemento <input> da página e altere seu atributo "placeholder" para "Digite seu nome".
const primeiroInput = document.querySelector("input");
primeiroInput.placeholder = "Digite seu nome";
console.log(primeiroInput);
