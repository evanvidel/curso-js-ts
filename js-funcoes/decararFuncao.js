//Declaração de função (Function hoisting)
//não faz difrença onde chamar a função, ela smpre vai para o topo

falaOi();
function falaOi() {
  console.log("Oi");
}

//First-class objects (objetos de primeira classe)

// function expression - uma const recebe uma função
const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

/* function executaFuncao(funcao) {
    console.log('vou executar sua função abaixo')
  funcao();
}
 */
//executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log("sou uma arrow function");
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();