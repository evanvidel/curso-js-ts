const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
//atribuição via desestruturação
//const {nome, sobrenome, endereco} = pessoa
//const {endereco: {rua: r, numero}, endereco} = pessoa
const {nome, sobrenome, ...resto} = pessoa

//const nome = pessoa.nome
console.log(nome, sobrenome, resto)