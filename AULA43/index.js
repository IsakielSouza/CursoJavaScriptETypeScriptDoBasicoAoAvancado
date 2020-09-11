/**
 * Escreva uma função que receba um número e retorne
 * o seguinte:
 * Número é divisível por 3 = Fizz - ok
 * Número é divisível por 5 = Buzz - ok 
 * Número é divisível por 3 e 5 = FizzBuzz - ok
 * Número NÃO é divisível por 3 e 5 = retorna o próprio número
 * Checa se o número é realmente um número = retorna o valor
 * Use a funnção com Números de 0 a 100
 */

function fizzBuzz(numero) {
  if (typeof numero !== 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
  if (numero % 3 === 0) return 'Fizz';
  if (numero % 5 === 0) return 'Buzz';
  return numero;
}
//testando o parametro passado!!!
console.log(fizzBuzz('a'));

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}