// Exercício 1
function normalizarTexto(texto: string) {
  return texto.trim().toLowerCase();
}

// Exercício 2
const input = document.querySelector("input");

const total = localStorage.getItem("total");
// Verifica se input e total existe, pelo fato que se não tiver nada em LocalStorage, ele não vai pegar nada
if (input && total) {
  input.value = total;
  calcularGanho(Number(input.value));
}

function calcularGanho(value: number) {
  const p = document.querySelector("p");
  if (p) {
    p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
  }
}

function totalMudou() {
  if (input) {
    localStorage.setItem("total", input.value);
    calcularGanho(Number(input.value));
  }
}

if (input) {
  input.addEventListener("keyup", totalMudou);
}
