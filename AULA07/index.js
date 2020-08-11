/**
 * 
 * Não podemos criar constantes com palavras reservadas
 * (if, console, const cont)
 * 
 * Constantes precisam ter nomes significativos
 * 
 * Não pode começar nomes de constantes com numeros
 * 
 * Não podem conter espaços ou traços
 * 
 * Padrão sera camelCase
 * 
 * Case-sensitive - letra MAIUSCULAS é diferente de letras minusculas (A,a)
 * 
 * Não pode modificar o valor de uma constante
 * 
 * 
 * string = Text / Number = Números
 */

const primeiroNumero = '5';
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(primeiroNumero + segundoNumero);