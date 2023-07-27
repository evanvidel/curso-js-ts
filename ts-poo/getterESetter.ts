export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ){
        this.cpf = _cpf
    }
    set cpf(cpf: string) {
        this._cpf = cpf
    }
    
    get cpf(): string {
        return this._cpf.replace(/\D/g, '')
    }
}

const pessoa = new Pessoa('Luiz', "Miranda", 30, '123.258.258-89')
pessoa.cpf = '125.633.898-88'
console.log(pessoa.cpf)