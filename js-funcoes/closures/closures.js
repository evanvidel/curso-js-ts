//closure é a habilidade de acesso o seu escopo lexico

function retornaFuncao(nome) {
    //const nome = 'Luiz' //closure
    return function() {
        return nome
    }
}

const funcao = retornaFuncao('Luiz')//closure
const funcao2 = retornaFuncao('João')//closure
console.dir(funcao)
console.dir(funcao2)
console.log(funcao(), funcao2())