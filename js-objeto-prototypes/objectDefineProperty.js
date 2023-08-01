function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  //this.estoque = estoque;
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // valor
    writable: false, //valor não pode ser alterado(false) caso true pode ser alterado
    configurable: true, //configurável
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor
      writable: false, //valor não pode ser alterado(false) caso true pode ser alterado
      configurable: true, //configurável
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor
      writable: false, //valor não pode ser alterado(false) caso true pode ser alterado
      configurable: true, //configurável
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(Object.keys(p1));
p1.estoque = 50000;
console.log(p1);

for(let chave in p1) {
    console.log(chave)
}
