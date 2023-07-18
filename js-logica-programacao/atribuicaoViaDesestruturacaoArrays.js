/// ...rest, ...spread

/* const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);
console.log(resto); */
//                 0        1        2      indeces
//               0 1 2    0 1 2    0 1 2     indeces
const numeros =[[1,2,3], [4,5,6], [7,8,9]]
const [lista1 , lista2, lista3] = numeros
console.log(lista3[2])

//const [,[, ,seis]] = numeros
//console.log(numeros[1][2])
//console.log(seis)