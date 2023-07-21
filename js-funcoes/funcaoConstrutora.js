// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora  -> Pessoa (new) inicia com letra maiuscula
function Pessoa(nome, sobrenome) {
  //atributos ou metodos privado 
  const ID = 123456;
  const metodoInterno = function () {
    console.log('teste')
  };

  //atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const p1 = new Pessoa("Luiz", "Otávio");
const p2 = new Pessoa("Maria", "Oliveira");

p2.metodo()
