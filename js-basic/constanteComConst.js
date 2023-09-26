// Não podemos criar Constantes com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma Constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar Constantes com let
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = 'João'
//nome = 'Otavio'//TypeError: Assignment to constant variable.

const primeiroNumero = 5
const segundoNumero = 10

const resultado = primeiroNumero  * segundoNumero
console.log(resultado);

const resultadoDuplicado = resultado * 2
console.log(resultadoDuplicado);
let resultadoTriplicado = resultado * 3

resultadoTriplicado = resultadoTriplicado + 5
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero);
