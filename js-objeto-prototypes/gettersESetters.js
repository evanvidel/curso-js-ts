/* function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, "estoque", {
      enumerable: true, // mostra a chave
      configurable: true, //configurável

      get: function() {
        return estoque;
      },
      set: function(valor) {
        console.log(valor)
      }
    });
}
const p1 = new Produto('Camisete', 20, 3);
console.log(p1) 
p1.estoque = 'O valor que eu quero'
console.log(p1.estoque)  */

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('Camiseta', 50)
//p1.desconto(100)
//p1.aumento(100)
//console.log(p1)

const p2 = {
    nome: 'Caneca',
    preco: 15
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(10)
console.log(p2)

const p3 = Object.create(Produto.prototype);
p3.preco = 113
p3.aumento(10)
console.log(p3)