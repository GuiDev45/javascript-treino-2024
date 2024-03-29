// 1. Alterar o estilo ao passar o mouse sobre os itens do menu:
//    - Ao passar o mouse sobre os itens do menu, altere sua cor de fundo para cinza claro e o texto para azul.
const alterarMenu = document.querySelectorAll(".menu li");

function handleAlterarMenu(event) {
  event.target.style.backgroundColor = "lightgrey"; // Altera a cor de fundo para cinza claro
  event.target.style.color = "blue";
}

function handleRemoveMenu(event) {
  event.target.style.backgroundColor = "";
  event.target.style.color = "";
}

alterarMenu.forEach((item) => {
  item.addEventListener("mouseover", handleAlterarMenu);
  item.addEventListener("mouseout", handleRemoveMenu);
});

// 2. Mostrar alerta ao clicar no botão de contato:
//    - Ao clicar no botão de contato na seção "Contato", exiba um alerta com uma mensagem personalizada.
const alertaContato = document.querySelector(".menu a[href='#contato']");
console.log(alertaContato);

function handleAlertaContato(event) {
  event.preventDefault();
  alert("Clicou no botão Contato!");
}

alertaContato.addEventListener("click", handleAlertaContato);

// 3. Contador de cliques em qualquer parte da página:
//    - Crie um contador que aumente em 1 cada vez que o usuário clicar em qualquer parte da página.
const contadorClicks = document.querySelectorAll("*");

let contador = 0;

function handleContadorClicks() {
  console.log("Número de cliques: ", contador++);
}

document.addEventListener("click", handleContadorClicks);

// 4. Mudar a cor de fundo aleatoriamente ao pressionar uma tecla:
//    - Ao pressionar uma tecla específica, mude a cor de fundo da página para uma cor aleatória.
function gerarCorAleatoria() {
  // Gera um valor hexadecimal aleatório para cada componente de cor (R, G, B)
  const cor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return cor;
}

function handleMudarCorFundo(event) {
  if (event.key === "c") {
    const corAleatoria = gerarCorAleatoria();
    document.body.style.backgroundColor = corAleatoria;
  }
}

window.addEventListener("keydown", handleMudarCorFundo);

// 5. Scroll suave ao clicar nos links internos:
//     - Faça com que, ao clicar nos links internos do menu, a página role suavemente até a seção correspondente, em vez de saltar diretamente para ela.
const linksInternos = document.querySelectorAll(".menu a[href^='#']");

// Função para lidar com o clique nos links internos
function handleScrollSuave(event) {
  // Previne o comportamento padrão do link
  event.preventDefault();

  // Obtém o destino do link interno
  const targetId = event.currentTarget.getAttribute("href");

  // Se o destino existir
  if (targetId) {
    // Seleciona o elemento correspondente ao destino
    const targetElement = document.querySelector(targetId);

    // Se o elemento existir
    if (targetElement) {
      // Calcula a posição do elemento em relação ao topo da página
      const offset = targetElement.offsetTop;

      // Realiza o scroll suave até a posição do elemento
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  }
}

// Adiciona um ouvinte de evento de clique a cada link interno do menu
linksInternos.forEach((link) => {
  link.addEventListener("click", handleScrollSuave);
});
