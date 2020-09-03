//FOR IN  - > lER OS INDICES OU CHAVES DO OBJETO

const pessoa = {
  nome: 'Isakiel',
  sobrenome: 'Souza',
  idade: 26
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
};

// const chave = 'nome'

// console.log(pessoa[chave]);
// console.log(pessoa['nome']);
// console.log(pessoa.nome);



// }
// const frutas = ['Pêra', 'Uva', 'Maçã'];
// //* 2° FOR
// for ( let fruta in frutas) {
//   console.log(frutas[fruta]);
// }


//* 1° FOR
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// 