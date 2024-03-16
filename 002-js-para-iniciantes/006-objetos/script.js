// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
const dadosPessoais = {
  nome: "Guilherme",
  sobrenome: "Bortoletto",
  idade: 31,
  cpf: "111.222.333/44",
};

console.log(dadosPessoais);
/*
{
    "nome": "Guilherme",
    "sobrenome": "Bortoletto",
    "idade": 31,
    "cpf": "111.222.333/44"
}
*/

console.table(dadosPessoais); // Renderiza uma tabela ao invés do console.log normal

// Crie um método no objeto anterior, que mostre o seu nome completo
function nomeCompleto() {
  return console.log(`${dadosPessoais.nome} ${dadosPessoais.sobrenome}`);
}

nomeCompleto(); // Guilherme Bortoletto

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

console.log((carro.preco = 3000)); // 3000

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
const cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  ver: function (pessoa) {
    if (pessoa === "homem") {
      console.log("Au au au au");
    }
  },
};

const humano = "homem";

cachorro.ver(humano); // Au au au au

console.log("-----------------------------------------");

// Gestão de Produtos:
// Crie um objeto representando um produto com propriedades como nome, preço e quantidade em estoque.
// Implemente métodos para atualizar a quantidade em estoque e calcular o valor total do estoque.
const produto = {
  nome: "Lazuli",
  preco: 12.25,
  qntEstoque: 60,
  totalEstoque: function () {
    return this.preco * this.qntEstoque;
  },
  atualizarEstoque: function (qnt) {
    this.qntEstoque += qnt;
    const resultado = this.qntEstoque * this.preco;
    return resultado;
  },
};

console.log("Total atual do estoque:", produto.totalEstoque()); // Total atual do estoque: 735
console.log("Atualizando estoque em +10");
console.log("Novo total do estoque:", produto.atualizarEstoque(10)); // Novo total do estoque: 857.5

console.log(produto);
/*
{
    "nome": "Lazuli",
    "preco": 12.25,
    "qntEstoque": 70
}
*/

// Calendário de Eventos:
// Desenvolva um objeto que represente um evento com propriedades como título, data e hora de início, data e hora de término e localização.
// Implemente métodos para alterar as informações do evento e verificar se ele está ocorrendo no momento atual.
const evento = {
  titulo: "Festa da Carla",
  dataInicio: "2024-02-16",
  horaInicio: "19:00",
  dataFinal: "2024-02-17",
  horarioFinal: "23:00",

  alterarEvento: function (
    titulo,
    dataInicio,
    horaInicio,
    dataFinal,
    horarioFinal,
  ) {
    this.titulo = titulo;
    this.dataInicio = dataInicio;
    this.horaInicio = horaInicio;
    this.dataFinal = dataFinal;
    this.horarioFinal = horarioFinal;
  },
  verificaEventoAtual: function () {
    const dataAtual = new Date();
    const dataInicio = new Date(this.dataInicio + " " + this.horaInicio);
    const dataFinal = new Date(this.dataFinal + " " + this.horarioFinal);

    return dataAtual >= dataInicio && dataAtual <= dataFinal;
  },
};

evento.alterarEvento(
  "Festa do João",
  "2024-03-16",
  "20:00",
  "2024-03-17",
  "02:00",
);

if (evento.verificaEventoAtual()) {
  console.log("O evento está ocorrendo agora!"); // O evento está ocorrendo agora! obs depende da hora que você está
} else {
  console.log("O evento não está ocorrendo no momento.");
}

// Gerenciador de Tarefas:
// Crie um objeto representando uma tarefa com propriedades como título, descrição, prazo de conclusão e status.
// Implemente métodos para marcar a tarefa como concluída, alterar seu prazo de conclusão e atualizar sua descrição.
const tarefaB = {
  titulo: "Compras",
  descricao: "Fazer compras no mercado",
  prazo: "2024-03-16",
  status: false,
  alterarTarefa: function (status, prazo, descricao) {
    this.status = status;
    this.prazo = prazo;
    this.descricao = descricao;
  },
};

tarefaB.alterarTarefa(true, "2024-03-16", "Fazer comprar no atacado");

console.log(tarefaB);
/*
{
    "titulo": "Compras",
    "descricao": "Fazer comprar no atacado",
    "prazo": "2024-03-16",
    "status": true
}
*/

// Gestor de Contatos:
// Desenvolva um objeto representando um contato com propriedades como nome, email e telefone.
// Implemente métodos para adicionar, editar e remover contatos.
const contato = {
  nome: "",
  email: "",
  telefone: "",
  adicionar: function (nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  },

  editar: function (nome, email, telefone) {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  },

  remover: function () {
    this.nome = "";
    this.email = "";
    this.telefone = "";
  },
};

contato.adicionar("Carla Red", "carlared@email.com", "(11) 9-99999-9999");
console.log(contato);
/*
{
    "nome": "",
    "email": "",
    "telefone": ""
}
*/

contato.editar("João Blue", "joaoblue@email.com", "(11) 9-88888-8888");
console.log(contato);
/*
{
    "nome": "",
    "email": "",
    "telefone": ""
}
*/

contato.remover();
console.log(contato);
/*
{
    "nome": "",
    "email": "",
    "telefone": ""
}
*/
