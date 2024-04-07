// Eventos:

// 1. Quando o usuário clicar nos links internos do site, adicione a classe 'ativo' ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links.
document.querySelectorAll(".link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".link").forEach((item) => {
      item.classList.remove("ativo");
    });
    link.classList.add("ativo");
  });
});

// 2. Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados.
document.body.addEventListener("click", (e) => {
  console.log(e.target);
});

// 3. Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado. O método remove() remove um elemento.
document.body.addEventListener("click", (e) => {
  e.target.remove();
});

// 4. Se o usuário clicar na tecla 't', aumente todo o texto do site.
document.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    document.body.style.fontSize = "larger";
  }
});

// 5. Adicione um evento de duplo clique a um elemento específico da página que ao ser clicado duas vezes, altere seu texto para 'Clicado duas vezes!'.
document
  .getElementById("elemento-especifico")
  .addEventListener("dblclick", (e) => {
    e.currentTarget.textContent = "Clicado duas vezes!";
  });

// 6. Adicione um evento de mouseover a um elemento da página que, ao passar o mouse por cima, altere sua cor de fundo para verde e ao sair do mouse, retorne à cor original.
const elementoHover = document.querySelector("p");
elementoHover.addEventListener("mouseover", function () {
  this.style.backgroundColor = "green";
});
elementoHover.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});
