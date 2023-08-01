/* eslint-disable prettier/prettier */
import { Messaging } from "./messaging";

const createSut = () => {
    return new Messaging();
}

describe('Messaging', () =>{
    afterEach(() => jest.clearAllMocks()); //depois de cada teste vc limpa os mocks

    it('shoul return undefined', () => {
        //System under test
       const sut = createSut();
       expect(sut.sendMessage('teste')).toBeUndefined()
    })
    it('shoul call console.log once', () => {
       const sut = createSut();
       const consoleSpy = jest.spyOn(console, 'log')
       sut.sendMessage('teste')
       expect(consoleSpy).toHaveBeenCalledTimes(1)
    })
    it('shoul call console.log with "Mensagem enviada:" and msg', () => {
       const sut = createSut();
       const consoleSpy = jest.spyOn(console, 'log')
       sut.sendMessage('teste')
       expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste')//ter sido chamado com
    })
})