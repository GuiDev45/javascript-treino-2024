// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelector(".menu");

console.log(menu.classList);
/*
{
    "0": "menu",
    "1": "azul"
}
*/

menu.classList.add("ativo");
console.log(menu.classList);
/*
{
    "0": "menu",
    "1": "azul",
    "2": "ativo"
}
*/

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
const itens = document.querySelectorAll(".menu a");

itens.forEach((item) => {
  item.classList.remove("ativo");
});

itens[0].classList.add("ativo");
console.log(itens);
/*
{
    "0": a.ativo,
    "1": a,
    "2": a,
    "3": a
}
*/

// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll("img[alt]");
console.log(imagens);
/*
{
    "0": {}
}
*/

imagens.forEach((item) => {
  console.log(item);
});
/*
Tem apenas um alt
<img src="img/imagem1.jpg" alt="Raposa">
*/

// Poderia também ser feito dessa forma, teria o resoltado da quantidade de img false/que não tem alt e quantidade de true/que tem alt
const imgs = document.querySelectorAll("img");

imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute("alt");
  console.log(possuiAtributo);
});
/*
true
6 false
*/

// Modifique o href do link externo no menu
const linkExterno = document.querySelector(".menu a[href^='http']");
console.log(linkExterno);
// <a href="https://www.origamid.com/">Dev →</a>

if (linkExterno) {
  linkExterno.href = "https://www.modificado.com";
}

console.log(linkExterno);
// <a href="https://www.modificado.com">Dev →</a>
/*
OBS:
essas modificações são refletidas no DOM em tempo real e permanecerão enquanto a página estiver aberta e o código JavaScript estiver em execução.
href, src, alt, etc., essas mudanças são permanentes até que sejam alteradas novamente por outro código JavaScript ou até que a página seja recarregada.
Elas são totalmente modificáveis e têm efeito permanente, a menos que alteradas por outro código.
*/
