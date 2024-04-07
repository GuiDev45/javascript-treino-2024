// 3 - Classes e Atributos:

// 1 Adicione a classe "ativo" ao elemento com ID "menu".
const ativoMenu = document.getElementById("menu");
ativoMenu.textContent = "ativo";

// 2 Remova a classe "destaque" de todos os elementos <p> da página.
const removeClass = document.querySelectorAll(".destaque");

removeClass.forEach((paragrafo) => {
  paragrafo.classList.remove("destaque");
});

console.log(removeClass);

// 3 Altere o valor do atributo "href" do primeiro link na página para "https://exemplo.com".

const primeiroLink = document.querySelector("a");
console.log("Antes da alteração:", primeiroLink.href);

primeiroLink.href = "https://exemplo.com";

console.log("Após a alteração:", primeiroLink.href);
