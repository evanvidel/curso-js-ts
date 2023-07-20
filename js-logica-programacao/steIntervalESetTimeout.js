function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {});
}

const timer = setInterval(function () {
  console.log(mostrarHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 3000);

setInterval(function () {
  console.log("Ola mundo!");
}, 5000);
