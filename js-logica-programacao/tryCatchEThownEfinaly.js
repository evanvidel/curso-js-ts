/* try {
  //executada quando não há erros

  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou um erro");
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("Também sou finaly.");
  }
} catch (e) {
  //executada quando há erros
  console.log("tratando o erro");
} finally {
  //sempre
  console.log("FINALY - Eu sempre sou executado");
}
 */

/* function retornaHora(data) {
  if (!(data instanceof Date)) {
    console.log("Não é");
  }
}

retornaHora(new Date());*/

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instâcia de Date");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: false
  });
}

const hora = retornaHora();
console.log(hora)
