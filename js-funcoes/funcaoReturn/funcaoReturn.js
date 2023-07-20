/**
 * return
 * returna uma valor
 * termina uma função
 */
/* function soma(a, b) {
  return a + b;
}
console.log(soma(2, 5));

function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 2);
 */

/* document.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  
});
 */

/* function criaPessoa(nome, sobrenome) {
  return [nome, sobrenome];
}

const p1 = criaPessoa("Luiz", "Otávio");
const p2 = {
  nome: 'João',
  sobrenome: 'Oliveira'
}

console.log(typeof p1)
console.log(typeof p2) */
//o return resto é da funçao falaResto
// o return falaResto é da função falaFrase

/* function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto; //retorna sem executar
}

/* const olaMundo = falaFrase('ola') //'ola' = comeco
console.log(olaMundo('mundo')) */
/* const fala = falaFrase("Olá");
const resto = fala("mundo");
console.log(resto);

function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
 */

function criaMultiplicador(multiplicador) {
  //multiplicador
  return function(n) {
    return n * multiplicador;
  };
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3)
const quadriplica = criaMultiplicador(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))
