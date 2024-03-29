// Retorne o url da página atual utilizando o objeto window
const urlPaginaAtual = window.location.href;
console.log(urlPaginaAtual);
// http://127.0.0.1:5500/003-dom/001-o-que-e-o-dom/index.html
// OBS: não é necessário declarar o window, poís tudo vem dele, poderia ser location.href

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const primeiroDocument = document.querySelector(".elementoh1");
console.log(primeiroDocument);
// h1.elementoh1
// OBS: elemento  é para pegar por classe CSS, document é para as tags do html, para manipular o DOM

// Retorne a linguagem do navegador
const linguagemDoNavegador = navigator.language;
console.log(linguagemDoNavegador);
// pt-BR
// OBS: tudo vem de window, então poderia ser window.navigator.language

// Retorne a largura da janela
const larguraDaJanela = innerWidth;
console.log(larguraDaJanela);
// 840
// OBS: tudo vem de window, então poderia ser window.innerWidth
