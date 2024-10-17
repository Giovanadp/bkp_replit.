//IF / ELSE -> ESTRUTURA CONDICIONAL PARA  TOMADA DE DECISÃO

const idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
else if (idade < 18) {
  console.log("Menor de idade");
}
else {
  console.log("Idade inválida");
}
//REFATORAÇÃO: refazer com melhorias 
//IF, IF PARA IF, / ELSE IF
//CASE SENSITIVE- Maiuscla diferem de minuscla

//**escreva um código que pergunte qual a cor preferida. Se for vermelho, imprima "vermelho". Se for azul, imprima "azul".SENÃO não conheço essa cor.

//const cor = "verde";
const cor = prompt("Qual a cor preferida?");
if (cor == "vermelho") {
  console.log("vermelho");
}
else if (cor == "azul") {
  console.log("azul");
}
else {
  console.log("Não conheço essa cor");
}

console.log(cor.length) // COMPRIMENTO DA STRING