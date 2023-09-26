/*
Evangelista Franco tem 56 anos, pesa 82 kg
tem 1.68 de altura e seu IMC é de 29.053287981859416
Evangelista Franco nasceu em 1967
*/
const nome = 'Evangelista Franco';
const sobrenome = 'NAscimento';
const idade = 56;
const peso = 82;
const alturaEmM = 1.68; // Corrigido para metros (ao invés de cm)
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2023 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
