//funçãoes imadiatas ou autoinvocadas
//IIFE - Immediately invoked function expresssion
/* (function () {
  console.log(123456);
  const nome = "Luiz";
  console.log(nome);
})();

const nome = "Qualquer coisa";
console.log(nome); //essa const nome não faz parte do escopo da função anoníma
 */

(function (idade, peso, altura) {

  const sobrenome = "Miranda";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Roberto"));//esse nome se refere a function criaNome(nome)
  }
  falaNome();
  console.log(idade,peso, altura)
})(30,80, 1.80);
