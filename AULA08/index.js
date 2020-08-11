/**
 * Isakiel Souza tem 26 anos, pesa 78 kg
 * tem 1.8 de altura e seu IMC é de 25.762980578676178
 * Isakiel Souza nasceu em 1994
 */

const nome = "Isakiel";
const sobrenome = "Souza";
const idade = 26;
const peso = 78;
const alturaEmM = 1.74;
let imc = peso / (alturaEmM * alturaEmM)
let anoNascimento = 2020 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos', 'pesa', peso, 'kg');//modo 01
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);//modo 02
console.log(nome +' '+ sobrenome +' '+'nasceu em' +' '+ anoNascimento);//modo 03
