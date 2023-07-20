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
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hora12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12')
  const hora = retornaHora(11);
  console.log(hora)
  
} catch (error) {
  //trata o erro
}finally {
  console.log('Tenha um bom dia!')
}
