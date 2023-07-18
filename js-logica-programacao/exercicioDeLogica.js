/* function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}
console.log(max(10, 2))

//modificação
function max(x, y) {
  if (x > y) {
    return x;
  } 
    return y;
}

//modificação 2
function max(x, y) {
    return x < y ? x : y
}
console.log(max(10, 20)) */

/* const max2 = (x, y) => {
    return x > y ? x : y
}
console.log(max2(100, 20))


const max3 = (x, y) => x > y ? x : y
console.log(max3(10, 20))

/**
 * Escreva uma função chamda ePaisagem que recebe dois argumentos
 * largura e altura de uma imagem (number)
 * retorne true se a imagem estiver no modo paisagem
 */

/* function ePaisagem(largura , altura) {
    //return largura > altura ? true : false
    return largura > altura 
}
const ePaisagem2 = (largura , altura) => largura > altura 


console.log(ePaisagem(1920, 1080))
console.log(ePaisagem2(1080, 1920)) */

/**
 * Escreva um afunção que recebe um numero e retorne o seguinte
 * Número e divisivel por 3 = Fizz
 * Número e divisivel por 5 = Buzz
 * Número e divisivel por 3 e 5 = FizzBuzz
 * Número e divisivel por 3 e 5 = Retorna o proprio número
 * Checar se o número é realmente um número
 * Use a função com numero de 0 a 100
 */

function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
