const pessoaB = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,

  //método - quando uma função esta dentro de um objeto se chama método
  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi...`) // o this se refere a pessoa1
    console.log(`A minha idade atual é ${this.idade}.`); // o this se refere a pessoa1
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

// criando uma função
// nome, sobrobrenome, idade  = parametros

// função Factore
function criaPessoa(nome, sobrenome, idade) {
  return {
    //objeto
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaPessoa("Luiz", "Otavio", 28); // argumentos
const pessoa2 = criaPessoa("Maria", "Oliveira", 25); // argumentos
const pessoa3 = criaPessoa("João", "Moreira", 45); // argumentos
const pessoa4 = criaPessoa("Junio", "Alves", 34); // argumentos
const pessoa5 = criaPessoa("Jean", "Paul", 27); // argumentos
console.log(
  pessoa1.nome,
  pessoa2.nome,
  pessoa3.nome,
  pessoa4.nome,
  pessoa5.nome
);
 
const nome01 = "Luiz";
const sobrenome01 = "Miranda";
const idade = 25;

//objeto
const pessoaA = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 25,
};
//para acessar uso a nontação .(ponto)

console.log(pessoaA.nome);
console.log(pessoaA.sobrenome);
console.log(pessoaA.idade);


const array = [1, 2, 3];
array.push(4);
array[0] = "Luiz";
//array = 'Outra coisa' //Assignment to constant variable.
//não posso atribuir outro valor. se fosse let daria certo
console.log(array);
