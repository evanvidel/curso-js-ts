/**
 * Aritméticos
 * + Adição / concatenação
 * - subtração
 * / divisão
 * * multiplicação
 * % modulo - resto da divição
 *  ** potenciação
 *  Precedencia =  ()  **  * / % +  -
 * Incremento++
 * Decremento--
 */

const num1 = 6;
const num2 = 10;
const num3 = 3;
console.log(num1 + num2 * num3);
let contador = 1;
contador++;
console.log(contador);
/* 
const passo = 50
let contador2 = 0
contador2 = contador2 + passo
console.log(contador2)
contador2 = contador2 + passo
console.log(contador2)
contador2 = contador2 + passo
console.log(contador2) */

let contador3 = 0;
contador3 += 2;
contador3 *= 2;
contador3 **= 2;
console.log(contador3);
//NaN - Not a number parseInt(inteiro), parseFloat(decimais)
const numero = 10;
const numero2 = "Luiz";
console.log(numero * numero2); //NAN
console.log(numero + numero2); //10Luiz
const numero3 = 10;
const numero4 = "5";
console.log(numero3 * numero4); //50
console.log(numero3 + numero4); //105

const dado = 10;
const dado2 = parseFloat("5.2");
console.log(dado + dado2);
