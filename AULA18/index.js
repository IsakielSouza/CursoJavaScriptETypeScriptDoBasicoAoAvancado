const pessoa = {
  nome: "Isakiel",
  sobrenome: "Souza",
  idade: 25,

  fala () {console.log(`${this.nome} ${this.sobrenome} está falando oi, minha idade é ${this.idade}`)},

  incrementa() {
    this.idade++
  }

}

pessoa.fala();
pessoa.incrementa();

pessoa.fala();
pessoa.incrementa();

pessoa.fala();
pessoa.incrementa();

pessoa.fala();
pessoa.incrementa();
// function criaPessoa (nome, sobrenome, idade) {
//   return { nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa("Isakiel", "Souza", 25);
// const pessoa2 = criaPessoa("leticia", "Moreira", 25);
// const pessoa3 = criaPessoa("Ana", "Isabelly", 4);
// const pessoa4 = criaPessoa("Lunna", "Valetina", 3);
// const pessoa5 = criaPessoa("Ana", "Alice", 2);






//console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa3.sobrenome, pessoa4.nome, pessoa5.nome, pessoa5.sobrenome);

// const pessoa = {
//   nome: "Isakiel",
//   Sobrenome: "Souza",
//   idade: 25
// }

// console.log(` Olá meu nome é ${pessoa.nome} ${pessoa.Sobrenome}, 
// tenho ${pessoa.idade}, e sou apaixonao pro tecnologia!`);