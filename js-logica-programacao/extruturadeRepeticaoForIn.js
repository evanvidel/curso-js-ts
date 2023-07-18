const frutas = ['Pera', 'Maçã', 'Uva']


const pessoa  ={
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

for (let key in pessoa) {
    console.log(key, pessoa[key])
}


//for in ler os indices ou chaves do objeto
/* for (let index in frutas) {
    console.log(index)
}
 */




/* for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
} */