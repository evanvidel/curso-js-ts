//Filter sempre vai retorna um array , coma mesma quantidadede elementos ou menos
//, map, reduce
/* const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

//Retorne os números maiores que 10
/* function callbackFilter(valor) {
  return valor > 10;
} */

/* const numerosFiltrados = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados);
 */

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasComMaisDe50Anos = pessoas.filter((obj) => obj.idade > 50);
const nomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);

//console.log(pessoasComNomeGrande);
//console.log(pessoasComMaisDe50Anos);
console.log(nomeTerminaComA);
