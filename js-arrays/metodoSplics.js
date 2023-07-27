//               -5       -4        -3          -2        -1
//                0        1         2           3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Julia"];

//nomes.splice(indice, delete, elem1,elem2, elem3 ...)
//const removidos = nomes.splice(4, 1) // começa no indice 4 e remove 1 elemento
//const removidos = nomes.splice(-2, 2); 
const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio'); 
console.log(nomes, removidos);
