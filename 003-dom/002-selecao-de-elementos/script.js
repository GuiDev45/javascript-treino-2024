// Retorne no console todas as imagens do site
const todosImgs = document.querySelectorAll("img");
console.log(todosImgs);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens = document.querySelectorAll('img[src^="img/imagem"]');
// ^=: Este é um operador de correspondência especial em CSS que significa "começa com".
/*
Portanto, 'img[src^="img/imagem"]' seleciona todos os elementos <img> que têm um atributo src cujo valor começa com "img/imagem". Isso significa que está selecionando todas as imagens cujo caminho (src) começa com "img/imagem". Por exemplo, isso selecionaria imagens com src como "img/imagem1.jpg", "img/imagem2.png", etc.
*/
console.log(imagens);

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("a[href^='#']");
console.log(linksInternos);
// Primeiro a tag, entre [] vai o atributo da tag, depois o ^= "começa com" no caso '#'

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector(".animais-descricao h2");
console.log(primeiroh2);
// o query vai pegar o primeiro h2 que ele encontra que esteja dentro do elemento css, nesse caso .animais-descricao

// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP.length); // Com isso é possível saber a quantidade total/NodeList de tags "p"
console.log(ultimoP[--ultimoP.length]);
// Decrementa o comprimento da NodeList em 1, o que nos dá o índice do último elemento. Então, ultimoP[--ultimoP.length] nos dá o último elemento <p> na NodeList

console.log("-----------------------------------------------");

// 1. Selecione todas as perguntas (elementos <dt>) dentro da seção de FAQ:
const perguntasFAQ = document.querySelectorAll(".faq-lista dt");
console.log(perguntasFAQ);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
*/
perguntasFAQ.forEach((pergunta) => {
  console.log(pergunta.textContent);
});
/*
Qual a idade dos animais?
Eles são fantásticos?
Qual a diferença?
Como proteger?
*/
// Ou seja, para cada pergunta em perguntasFAQ, itere usando o conteúdo do texto/textContent

// 2. Selecione todos os parágrafos (elementos <p>) dentro da seção de animais:
const todosOsPs = document.querySelectorAll("section p");
console.log(todosOsPs);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {},
    "9": {},
    "10": {},
    "11": {},
    "12": {},
    "13": {},
    "14": {},
    "15": {},
    "16": {},
    "17": {},
    "18": {},
    "19": {},
    "20": {},
    "21": {},
    "22": {},
    "23": {}
}
*/

todosOsPs.forEach((ps) => {
  console.log(ps.textContent);
});
// Imprimiu mas é muita coisa para colar aqui

console.log("-----------------------------------------------");

// 3. Selecione todos os itens de lista (elementos <li>) dentro da seção de contato:
const allItens = document.querySelectorAll("#contato li");
console.log(allItens);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
*/
allItens.forEach((item) => {
  console.log(item.textContent);
});
/*
contato@origamid.com
104 +55 (21) 9999-9999
104 Rua do Conde, nº 21
104 Rio de Janeiro - RJ
*/

// 4. Selecione o título do primeiro animal listado (primeiro elemento <h2> dentro de .animais-descricao):
const primeiroAnimal = document.querySelector(".animais-descricao h2");
console.log(primeiroAnimal);
/*
<h2>
::before
"Raposa"
</h2>
*/

// 5. Selecione o mapa dentro da seção de contato:
const imgMapa = document.querySelector("img[src^='img/mapa']");
console.log(imgMapa);

// poderia ser dessa outra forma
const imgMapaB = document.querySelector(".mapa img");
console.log(imgMapaB);

console.log("-----------------------------------------------");

// 6. Selecione todos os elementos de lista (elementos <li>) dentro da seção de FAQ:
const listaFAQ = document.querySelectorAll(".dados li");
console.log(listaFAQ);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
*/

listaFAQ.forEach((lista) => {
  console.log(lista.textContent);
});
/*
contato@origamid.com
138 +55 (21) 9999-9999
138 Rua do Conde, nº 21
138 Rio de Janeiro - RJ
*/

// 7. Selecione todos os elementos que possuem a classe "grid-section":
const elementosGrid = document.querySelectorAll(".grid-section");
console.log(elementosGrid);

// 8. Selecione o último elemento de lista (último elemento <li>) dentro da seção de contato:
const ultimoElemento = document.querySelectorAll(".dados li");
console.log(ultimoElemento);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {}
}
*/
console.log(ultimoElemento[--ultimoElemento.length]);
/*
<li>
::before
"Rio de Janeiro - RJ"
</li>
*/

// 9. Selecione todos os elementos de texto dentro da seção de animais:
const secaoAnimais = document.querySelectorAll(".animais-descricao p");
console.log(secaoAnimais);

secaoAnimais.forEach((elemento) => {
  console.log(elemento.textContent);
});

// 10. Selecione todos os elementos de título (h1, h2, h3, h4, h5, h6) em todo o documento:
const todosOsTitulos = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
console.log(todosOsTitulos);
/*
{
    "0": {},
    "1": {},
    "2": {},
    "3": {},
    "4": {},
    "5": {},
    "6": {},
    "7": {},
    "8": {}
}
*/

todosOsTitulos.forEach((titulo) => {
  console.log(titulo.textContent);
});
/*
Animais Fantásticos
Raposa
Esquilo
Urso
Lobo
Macaco
Leão
FAQ
Contato
*/
