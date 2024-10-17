/**  
 *FUNÇÕES SÃO BLOCOS QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARÂMETROS
 * FUNÇÕES PODEM RETORNAR VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
//DECLARAÇÃO DE FUNÇÃO
function dizOi() {
  alert('Oi')
}
function olaPessoa(nome) {
  alert('Olá ' + nome)
}
function olaPessoa(nome) {
  alert('Olá ' + nome)
}
function olaPessoa(nome) {
  alert('Olá ' + nome)
}
const nome = ' João '
const sobreNome = ' Silva '
const idade = 30

function dadosPessoa(){
  const dados = nome + sobreNome + idade
  console.log(dados)
}
//INVOCAÇÃO DE FUNÇÃO
dizOi()
olaPessoa('Maria')
dadosPessoa()