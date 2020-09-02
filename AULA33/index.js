const pessoa = {
  nome: 'Isakiel',
  sobrenome: 'Souza',
  idade: 26,
  endreco: {
    rua: 'Av Brasil',
    numero: '200'
  }
}

const {nome, ...resto} = pessoa;
console.log(resto)
console.log(nome)

// const {endreco: {rua: r, numero: n}, endreco: enredecoCompleto} = pessoa;
// console.log(r, n)
// console.log(enredecoCompleto)


// const {nome: varTeste, sobrenome, idade } = pessoa;
// console.log(varTeste, sobrenome, idade)


// const {semvariavel = 'Não exite', nome, sobrenome} = pessoa
//  console.log(semvariavel, nome, sobrenome) //Isakiel


//atribuição via desestruturação
// const {nome, sobrenome} = pessoa
// console.log(nome, sobrenome) //Isakiel

// const nome = pessoa.nome; 
// console.log(nome) //Isakiel
