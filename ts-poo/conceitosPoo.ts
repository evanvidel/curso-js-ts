/**
 * ###  Os pilares da Poo ###
 * Programação Orientada a Objetos
 *
 * Abstração: Permite isolar de um objeto somente conceitos
 * que são necessarios para o funcionamento do programa
 */
export class Pessoa {
  private nome: string;
  private sobrenome: string;
  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}
/**
 * Encpsulamento: Visa ocultar partes internas de um objeto
 * e exibe apenas o necessário para uso externo
 */
export class RemotoControl {
  constructor(private powerStatus = false) {}

  public turnOn(): void {
    this.powerStatus = true;
  }
  public turnOff(): void {
    this.powerStatus = false;
  }
  public getStatus(): boolean {
    return this.powerStatus;
  }
}

/**
 * Herança: Visa passar características de um objeto para outro
 */
export abstract class Animal {
  constructor(public name: string) {}
  abstract makeNoise(): void;
}
export class Dog extends Animal {
  makeNoise(): void {
    console.log(`${this.name} esta fazendo AU AU...`);
  }
}
export class Cat extends Animal {
  makeNoise(): void {
    console.log(`${this.name} esta fazendo MIAU...`);
  }
}

/**
 * Polimorfismo: Algo que é polimorfo 
 * tem a bilidade de assumir diferentes formas
 */
class AnimalSounds {
    public playSound(animal: Animal): void {
        animal.makeNoise();
    }
}
const dog = new Dog('Tina')
const cat = new Cat('Suzy')
const animalSounds = new AnimalSounds();

animalSounds.playSound(dog) // Tina esta fazendo AU AU
animalSounds.playSound(cat) // Susy esta Fazendo MIAU
