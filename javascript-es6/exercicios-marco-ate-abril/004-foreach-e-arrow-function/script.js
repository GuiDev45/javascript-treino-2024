// forEach e arrow function:

// 1 Utilize uma arrow function e o método forEach para percorrer um array de números e exibir o quadrado de cada número no console.
const arrNum = [7, 2, 3, 6, 100, 245, 604];

const numQuadrado = (numeros) => {
  numeros.forEach((numero) => {
    console.log(numero ** 2);
  });
};

numQuadrado(arrNum);

// 2 Crie uma função que recebe um array de nomes como parâmetro e utiliza forEach para exibir cada nome em maiúsculas no console.
const arrNomes = ["Ana", "João", "Maria", "Pedro", "Carla", "Miguel"];

const maiusculas = (nomes) => {
  nomes.forEach((nome) => {
    console.log(nome.toUpperCase());
  });
};

maiusculas(arrNomes);

// 3 Utilize forEach para percorrer um array de objetos que representam produtos (cada objeto tem as propriedades "nome" e "preco") e exiba o nome e o preço de cada produto no console.

produtos = [
  { nome: "Camiseta", preco: 25.99 },
  { nome: "Calça Jeans", preco: 49.99 },
  { nome: "Tênis", preco: 79.99 },
  { nome: "Relógio", preco: 99.99 },
  { nome: "Bolsa", preco: 39.99 },
];

produtos.forEach((item) => {
  console.log(`Nome: ${item.nome}, Preço: ${item.preco}`);
});
