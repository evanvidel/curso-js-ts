const numero = Number(prompt("Digite uma numero"));

const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

/**
 * Raiz quadrada 7.42
 * 55.1987555 é inteito
 * arredondado para baixo
 * com duas casa decimais
 *
 */

numeroTitulo.innerHTML = numero;
texto.innerHTML = "";
texto.innerHTML += `<p>Raiz quadrada é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p> ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>é NaN:  ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo:  ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima:  ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casa decimais ${numero.toFixed(2)}</p>`;
