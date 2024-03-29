// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll(".menu a[href^='#']");
console.log(linksInternos);

function handleClick(event) {
  event.preventDefault();
  linksInternos.forEach((links) => {
    links.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((item) => {
  item.addEventListener("click", handleClick);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const todosElementos = document.querySelectorAll("body *");
console.log(todosElementos);

function handleClickB(event) {
  console.log("Elemento clicado:", event);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClickB);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleClickAndRemove(event) {
  event.preventDefault();
  const elementoClicado = event.target;
  elementoClicado.remove();
}

// Adiciona um ouvinte de evento de clique a cada elemento
todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleClickAndRemove);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  console.log(event.key);
  if (event.key === "t") {
    console.log("Clicou t");
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
