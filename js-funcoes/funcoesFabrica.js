//funcões fabrica - Factory function
//função contrutora - contructor function
/**Quando uma função esta dentro de um objeto, esta função se chama método */
function criarPessaa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ')
      console.log(valor);
    },
    fala(assunto = 'falando NADA') {
      return `${this.nome} esta ${assunto}`;
    },
    altura: a,
    peso: p,
    // Getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criarPessaa("Luiz", "Miranda", 1.8, 80);
p1.nomeCompleto = "Maria Oliveira Silva";
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())

/* console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)
 */
/* console.log(p1.fala("Falando sobre Js"));
console.log(p1.imc())
const p2 = criarPessaa("Maria", "Joaquina", 1.60, 42);
console.log(p2.fala("Falando sobre Js"));
console.log(p2.imc())
 */

//o this se refere ao p1 ou p2 nesse caso
