
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

for(let key in pessoa) {
    console.log(key, pessoa[key])
}

// for clássico - Geralmente com interáveis (array  o string)
//for in Retorna o indece ou chave (string, array ou objetos)
//for of Retorna o valor em  (interaveis, arrays ou string)





//const nome = 'Luiz Otávio';
/* const nomes = ["Luiz", "Otávio", "Henrique"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
console.log("---------------");
/* console.log('---------------') */
/* for (let i in nome) {
    console.log(nome[i])
} 

for (let valor of nome) {
    console.log(valor)
} */ 

/* for (let i in nomes) {
  console.log(nomes[i]);
}
console.log("-----------------");

for (let valor of nomes) {
  console.log(valor);
}
console.log("-----------------");

//forEach - valor, indice e array completo
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
}); */
