/* function soma(x, y) {
  const resultado = x + y;
  return resultado;

  //depois de return nada mais será lido
} */
function soma(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;

  //depois de return nada mais será lido
}

const raiz1 = function (n) {
    return n ** 0.5
};
const raiz2 = (n) => { // arrow function = tira se a function e se coloca um => (arrow) deposis do ()
    return n ** 0.5
}; 
const raiz3 = (n) => n ** 0.5 // mais simplificada


console.log(raiz1(9))
console.log(raiz2(16))
console.log(raiz2(25))

//console.log(soma(2, 2))

const resultado = soma(5, 10); //essa const não fazer parte da função soma -> outra const
//const resultado = soma('Luiz',' Otávio'); //essa const não fazer parte da função soma -> outra const
console.log(resultado);

/**
 * quando um valor do parametro é declarado sera exibido so se a função não tiver atributos
 */

// funções tem as mesmas regras das variáveis
/* function saudacao(nome) {
  //corpo da função
  return `Bom dia ${nome}!` // função que retorna valor
}
//chamando uma função
const variavel = saudacao('Luiz');
console.log(variavel)
 */

/**
 * è preferivel fazer função pequenas do que fazer uma função muito grande
 */
