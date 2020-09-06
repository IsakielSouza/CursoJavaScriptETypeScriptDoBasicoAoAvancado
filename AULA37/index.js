/**
 * for para objetos iteraveis
 * 
 * For clássico - Geralmente com iteráveis (array ou string)
 * For IN - Retorna o índice ou chave (string, array, ou objetos)
 * for OF - Retorna o valor em si (iteráveis, arrays ou strings)
 */

const pessoa = {
  nome: 'Isakiel',
  sobrenome: 'Souza',
  idade: 26
};

for (chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

// const nomes = ['Luiz', 'Otávio', 'Isakiel', 'Souza'];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(nomes[i]);
// }

// for (let i in nomes) {
//   console.log(nomes[i])
// }

// for (valor of nomes){
//   console.log(valor)
// }

// nomes.forEach(function(el, ind) {
//   console.log(el, ind);
// });