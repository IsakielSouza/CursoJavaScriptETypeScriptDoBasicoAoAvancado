/**
 * Mais dferença entre VAR e LET/CONST
 */
let nome = 'Isakiel' //criando variavel
var sobrenome = 'Souza'
//erro ao atribuir let no mesmo escopo
//SyntaxError: Identifier 'nome' has already been declared
//let nome = '2Isakiel' //comentado para nao  da erro no console!

//com var ja é possivel atribuir novamento
var sobrenome = '2Souza'

//LET tem escopo de bloco {... bloco},
//caso a variavel let nao seja encontrada no bloco, a moto do javascript vai procurar no escopo acima!

//VAR so tem escopo de função!
// se variavel VAR declarada fora do escopo, ela pode ser acessada dentro de outro escopo
// porem se VAR declarada em um escopo {....escopo}, ela nao pode ser acessada no escopo acima
if (true) {
  let nome = '2Isakiel' //criando variavel
  console.log(nome, sobrenome)
}