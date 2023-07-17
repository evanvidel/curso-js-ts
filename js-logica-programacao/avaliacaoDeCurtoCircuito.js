//Short-Circuit
/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
*/

//console.log(0 || false || null || "Luiz Otávio" || true); //retorna o primeiro valor verdadeiro - "Luiz Otávio"

const corUsuario = "vermelho";
const corPadrao = corUsuario || "preto";

console.log(corPadrao);

const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // vaor imprimido "false"

/* console.log('Luiz Otavio' && 0 && 'Maria' )
console.log('Luiz Otavio' && true && 'Maria' )

console.log('Luiz' && NaN && 'Maria')

function falaOi () {
    return 'Oi'
}

let vaiExecutar = 'Joãozinho'; // qualquer valor que não seja false, undenfined, NaN sera executado
console.log(vaiExecutar && falaOi()) */
