const pontuacaoUsuario = 500;

//operação ternáraria
const nivelUsuario =
  pontuacaoUsuario >= 1000 ? "Usuário Vip" : "Usuário normal";

const corUsuario = null;
const corPadrao = corUsuario || "preta";
console.log(nivelUsuario, corPadrao);
