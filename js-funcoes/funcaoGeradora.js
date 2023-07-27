//função geradora - pará em detreminado local- codigo pode ser pausado
//devo usar next para exibir o valor
function* geradora1() {
  //codigo qualquer
  yield "valor1";
  //codigo qualquer
  yield "valor2";
  //codigo qualquer
  yield "valor3";
}
function* geradora2() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

function* geradora5() {
    yield function() {
        console.log('Vim do y1')
    }
    return function() {
        console.log('vim do return')
    }
    //code...
    yield function() {
        console.log('Vim do y2')
        //code...
    }
}

const g5 = geradora5()
const func1 = g5.next().value
const func12= g5.next().value
func1()
func12()

/* const g4 = geradora4()
for(let valor of g4)
console.log(valor)
 */

/* const g2 = geradora2();
console.log(g2.next().value); */

//const g1 = geradora1()
/* for(let valor of g1) {
    console.log(valor)
} */

/* const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
 */
