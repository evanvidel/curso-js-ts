function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Tratando os dadoa da BASE", rand(1, 3));
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => {
    console.log('Exibe dados na tela')
  })
  .catch();

/* esperaAi("frase 1", rand(1, 3), function () {
  esperaAi("frase 2", rand(1, 3), function () {
    esperaAi("frase 3", rand(1, 3));
  });
});
 */
