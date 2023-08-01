function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  /* form.onsubmit = function (e) {
    e.preventDefault();
    console.log("foi enviado");
  }; */

  const pessoas = []; //array para salvar objetos

  function recebeEventoForm(e) {
    e.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      //adicionado objetos dentro de pessoas
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

    //console.log(nome,sobrenome, peso, altura) //dessa forma aparece o html
    //console.log(nome.value) //dessa forma aparece o valor digitado
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
