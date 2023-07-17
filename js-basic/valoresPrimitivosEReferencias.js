/**
 * Primitivos (imutáveis) - string, number, boolean undefined, null (bigint, symbol)
 * ele são copiados quando 'igualamoa' uma variavel a outra, ou seja recebe ex: b = a //copia
 * Referência (mutável) - array, object, function = valorese passado por referêcia - aponta para o mesmo valor na memória
 */

const a = {
  nome: "Luiz",
  sobrenome: "Otávio",
};

//const b = a;
const b = {...a}; //Spread Operator 'espalha'

a.nome = 'João'
console.log(a)
console.log(b)

/* let a = [1,2,3] 
let b = [...a] //foi copiado de b (Spread Operator)
let c = a
a.push('Luiz')
console.log(a , c)

console.log(a , b)

a.push(4)
console.log(a , b) //modica a e b

a.pop()
console.log(a , b) //modica a e b
 */

/* //          0123
let nome = "Luiz";
nome[0] = "R";
console.log(nome[0], nome);
 */

/* let a = 'A';
let b = a //cópia

console.log(a, b)

a = 'outra coisa'
console.log(a, b) */
