//new Array();
/* const pessoa1 = new Object();
pessoa1.nome = "Luiz";
pessoa1.sobrenome = "Miranda";
pessoa1.idade = 56;
pessoa1.falarnome = function () {
  return `${this.nome} esta falando seu nome`;
};
pessoa1.getDataNacimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};
pessoa1.falarnome();

console.log(pessoa1.getDataNacimento()) */

/* for (let chave in pessoa1) {
    console.log(pessoa1[chave])
} */

/* delete pessoa1.nome;

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

const pessoa2 = {
  nome: "Jovem",
  sobrenome: "Otavio",
};

console.log(pessoa2.nome);
console.log(pessoa2.sobrenome); */

/* const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
};
const chave = 'nome'
console.log(pessoa[chave])
console.log(pessoa["nome"]);
console.log(pessoa["sobrenome"]); */
// Constructor function / classes

//Factory function
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1.nomeCompleto); //com get
//console.log(p1.nomeCompleto());//sem get

//Constructor function
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  Object.freeze(this); //não deixa alterar nenhum valor
}
// new cria um objeto vazio {} e atrela a palavra this ao objeto
//exemplo: const p2 = {}; p2.pessoa = no caso o p2 seria o this
const p2 = new Pessoa('Maria', 'das Graças')
const p3 = new Pessoa('Jordan', 'Hernesto')
Object.freeze(p2) // utilizando não deixa alterar
p2.nome = 'Outra coisa'
//p2 = (endereco de memoria) -> valor, nesse caso estou alterando o valor e não o endreco de memoria
console.log(p2) //objeto literal
console.log(p3) //objeto literal
