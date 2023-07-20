// argumentos que sustenta todos os argumentos enviados

//function funcao(a, b, c, d, e, f) {
/* let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  } */
/* console.log( a, b, c, d, e, f);
}

funcao(1, 2, 3);
 */

/* function funcao(a, b = 2 , c =  4) {
  console.log(a + b + c)
}
funcao(2, 10, 20)
funcao(2, undefined, 20)
funcao(2, undefined, undefined) */
/* function funcao({nome, sobrenome,idade}) {
  console.log(nome, sobrenome, idade)
}
funcao({nome: 'Luiz', sobrenome: 'Otavio', idade: 20}) */

/* function funcao([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao(["Luiz Otávio", "Miranda", 30]);
 */

/* function conta(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
} */

//conta("+", 1, 20, 30, 40, 50);
const conta = (operador, acumulador, ...numeros) => {
  console.log(operador, acumulador, numeros);
}
conta("+", 1, 20, 30, 40, 50);
 
const conta2 = (...args) => {
  console.log(args);
}
conta2("+", 1, 20, 30, 40, 50);
 