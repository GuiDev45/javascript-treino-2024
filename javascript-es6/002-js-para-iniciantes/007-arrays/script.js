// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
const arrCopa = [1959, 1962, 1970, 1994, 2002];
arrCopa.push(2002);
console.log(arrCopa.length);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (let i = 0; i < arrCopa.length; i++) {
  if (arrCopa[i] === 2002) {
    console.log(`O Brasil ganhou a Copa de ${arrCopa[i]}`);
    break; // Termina o loop após encontrar o ano desejado
  }
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
let frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "Pera") {
    console.log("Encontrou a Pera! Parando o loop.");
    break; // interrompe o loop quando encontrar "Pera"
  }
  console.log(frutas[i]);
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
let ultimaFruta = frutas[frutas.length - 1];

console.log("Última fruta da array:", ultimaFruta);
console.log("Array de frutas:", frutas); // A array original permanece inalterada

// Média de Notas:
// Crie uma array com as notas de um aluno em uma disciplina e calcule a média das notas.
let arrNotas = [4.0, 3.5, 7.3, 4.8, 8.9];
let somaNotas = arrNotas.reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0); //Começa com o valor inicial 0
let numMaterias = arrNotas.length;

const resultadoNotas = somaNotas / numMaterias;
console.log("Média nota: " + resultadoNotas); // Média nota: 5.7

// Ordenação Crescente:
// Dada uma array de números, ordene os elementos em ordem crescente e exiba o resultado.
let arrAsc = [8, 2, 4, 6, 7, 20, 15, 66, 47, 95];
arrAsc.sort((a, b) => {
  return a - b;
});

console.log("Array ordenada em ordem crescente:", arrAsc);

// Remoção de Elementos:
// Dada uma array de strings, remova todos os elementos que contenham a letra 'a' e exiba a nova array.
let arrRemover = ["banana", "maçã", "laranja", "abacaxi", "uva"];

// Remoção de elementos que contenham a letra 'a'
let novaArray = arrRemover.filter((elemento) => !elemento.includes("a"));

// Exibição da nova array
console.log("Nova array após remover elementos com 'a':", novaArray);

// Contagem de Elementos Únicos:
// Dada uma array com elementos repetidos, conte quantas vezes cada elemento aparece e exiba a contagem para cada elemento único.
let arrRepetidos = ["a", "b", "a", "c", "b", "a", "d", "e", "e"];

// Contagem de elementos únicos usando reduce
let contagem = arrRepetidos.reduce((acc, elemento) => {
  acc[elemento] = (acc[elemento] || 0) + 1;
  return acc;
}, {});

// Exibir a contagem para cada elemento único
for (let elemento in contagem) {
  console.log(`${elemento}: ${contagem[elemento]} vezes`);
}

// Soma de Matrizes:
// Dadas duas matrizes representadas como arrays bidimensionais, realize a soma das matrizes e exiba o resultado.
// Função para somar duas matrizes
function somaMatrizes(matriz1, matriz2) {
  // Verifica se as matrizes têm o mesmo tamanho
  if (
    matriz1.length !== matriz2.length ||
    matriz1[0].length !== matriz2[0].length
  ) {
    return "As matrizes têm tamanhos diferentes. Não é possível realizar a soma.";
  }

  // Soma as matrizes utilizando map() e reduce()
  return matriz1.map((linha, i) =>
    linha.map((elemento, j) => elemento + matriz2[i][j]),
  );
}

// Exemplo de uso
const matrizA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrizB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];

const resultado = somaMatrizes(matrizA, matrizB);
console.log(resultado);

// Busca Binária:
// Implemente um algoritmo de busca binária para encontrar um elemento em uma array ordenada.
function buscaBinaria(array, elemento) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === elemento) {
      return meio; // Elemento encontrado, retorna o índice
    } else if (array[meio] < elemento) {
      inicio = meio + 1; // Descartar metade inferior
    } else {
      fim = meio - 1; // Descartar metade superior
    }
  }

  return -1; // Elemento não encontrado
}

// Exemplo de uso
const arrayOrdenada = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const elementoBuscado = 12;
const indice = buscaBinaria(arrayOrdenada, elementoBuscado);

if (indice !== -1) {
  console.log(
    `O elemento ${elementoBuscado} foi encontrado no índice ${indice}.`,
  );
} else {
  console.log(`O elemento ${elementoBuscado} não foi encontrado no array.`);
}

// União de Listas:
// Dadas duas arrays, una as duas em uma única array sem elementos duplicados e exiba o resultado.
function uniaoListas(lista1, lista2) {
  // Concatenar as duas listas
  const listaConcatenada = lista1.concat(lista2);

  // Filtrar para remover elementos duplicados
  const listaSemDuplicatas = listaConcatenada.filter((elemento, indice) => {
    return listaConcatenada.indexOf(elemento) === indice;
  });

  return listaSemDuplicatas;
}

// Exemplo de uso
const listaA = [1, 2, 3, 4, 5];
const listaB = [3, 4, 5, 6, 7];

const listaUnida = uniaoListas(listaA, listaB);
console.log(listaUnida);

// Substituição de Elementos:
// Dada uma array de números, substitua todos os números negativos por zero e exiba a nova array.
function substituirNegativosPorZero(array) {
  // Utiliza o método map() para criar uma nova array
  return array.map((elemento) => (elemento < 0 ? 0 : elemento));
}

// Exemplo de uso
const arrayOriginal = [1, -2, 3, -4, 5, -6, 7];
const arrayNova = substituirNegativosPorZero(arrayOriginal);
console.log(arrayNova);

// Adição de Elemento no Final:
// Crie uma função que recebe uma array e um elemento como parâmetros e adiciona esse elemento no final da array.
function adicionarElementoNoFinal(array, elemento) {
  // Utiliza o método push() para adicionar o elemento ao final da array
  array.push(elemento);
  // Retorna a array modificada
  return array;
}

// Exemplo de uso
const minhaArray = [1, 2, 3, 4];
const elementoNovo = 5;

const arrayModificada = adicionarElementoNoFinal(minhaArray, elementoNovo);
console.log(arrayModificada);

// Remoção do Último Elemento:
// Escreva uma função que remove o último elemento de uma array e retorna a array modificada.
function removerUltimoElemento(array) {
  // Utiliza o método pop() para remover o último elemento da array
  array.pop();
  // Retorna a array modificada
  return array;
}

// Exemplo de uso
const minhaArrayB = [1, 2, 3, 4, 5];

const arrayModificadaB = removerUltimoElemento(minhaArray);
console.log(arrayModificada);

// Verificação de Elemento Existente:
// Implemente uma função que verifica se um determinado elemento existe em uma array e retorna true se existir ou false caso contrário.
function verificarElemento(array, elemento) {
  // Utiliza o método includes() para verificar se o elemento existe na array
  return array.includes(elemento);
}

// Exemplo de uso
const minhaArrayC = [1, 2, 3, 4, 5];
const elementoBuscadoC = 3;

const elementoExiste = verificarElemento(minhaArray, elementoBuscado);
console.log(elementoExiste); // Saída: true

// Reversão da Ordem:
// Crie uma função que recebe uma array e retorna uma nova array com os elementos na ordem reversa.
function reverterOrdem(array) {
  // Utiliza o método reverse() para reverter a ordem dos elementos na array
  return array.slice().reverse();
}

// Exemplo de uso
const minhaArrayD = [1, 2, 3, 4, 5];

const arrayRevertida = reverterOrdem(minhaArray);
console.log(arrayRevertida);

// Filtro por Tamanho:
// Escreva uma função que recebe uma array de strings e um número inteiro como parâmetros, e retorna uma nova array contendo apenas as strings com tamanho igual ou superior ao número dado.
function filtrarPorTamanho(strings, tamanhoMinimo) {
  // Utiliza o método filter() para filtrar as strings com tamanho igual ou superior ao número dado
  return strings.filter((string) => string.length >= tamanhoMinimo);
}

// Exemplo de uso
const arrayDeStrings = ["a", "ab", "abc", "abcd", "abcde"];
const tamanhoMinimo = 3;

const stringsFiltradas = filtrarPorTamanho(arrayDeStrings, tamanhoMinimo);
console.log(stringsFiltradas);

// Mapeamento de Elementos:
// Implemente uma função que recebe uma array de números e retorna uma nova array com o dobro de cada número da array original.
function dobrarElementos(array) {
  // Utiliza o método map() para criar uma nova array com o dobro de cada número da array original
  return array.map((numero) => numero * 2);
}

// Exemplo de uso
const arrayOriginalC = [1, 2, 3, 4, 5];

const arrayDobrada = dobrarElementos(arrayOriginal);
console.log(arrayDobrada);

// Redução de Elementos:
// Crie uma função que recebe uma array de números e retorna a soma de todos os elementos da array.
function somarElementos(array) {
  // Utiliza o método reduce() para somar todos os elementos da array
  return array.reduce((acumulador, elemento) => acumulador + elemento, 0);
}

// Exemplo de uso
const arrayDeNumeros = [1, 2, 3, 4, 5];

const somaDosElementos = somarElementos(arrayDeNumeros);
console.log(somaDosElementos);

// Ordenação Personalizada:
// Escreva uma função que ordena uma array de objetos com base em uma determinada propriedade dos objetos.
function ordenarPorPropriedade(array, propriedade) {
  // Utiliza o método sort() para ordenar a array com base na propriedade especificada
  array.sort((a, b) => a[propriedade] - b[propriedade]);
  return array;
}

// Exemplo de uso
const arrayDeObjetos = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Carlos", idade: 20 },
];

const propriedadeParaOrdenar = "idade";

const arrayOrdenadaE = ordenarPorPropriedade(
  arrayDeObjetos,
  propriedadeParaOrdenar,
);
console.log(arrayOrdenada);
