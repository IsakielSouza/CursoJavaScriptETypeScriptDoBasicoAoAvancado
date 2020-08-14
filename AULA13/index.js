let umaString = "Um texto texto text";
console.log(umaString.indexOf('x'));
//caso o que foi informado o indexOf nao seja encotrado o retorno será -1
//5

//localiza string informada com um parametro de posição incial.
console.log(umaString.indexOf('t',5));
//6

//para localiza string da direita para esquerda, 
console.log(umaString.lastIndexOf('t' , 5));
//3

//para substituir uma palavra por outra
console.log(umaString.replace('Um', 'Outra'));
//Outra texto texto text

//para substituir uma caractere pou outro regex
console.log(umaString.replace(/t/, '#'));
//subtituido em todas

console.log(umaString.replace(/t/g, '#'));
//Um #ex#o #ex#o #ex#

//tamanha total da string
console.log(umaString.length)
//19

//como visualizar strind com posição inicial e final
console.log(umaString.slice(9,14))
//texto

//como visualizar strind com posição só inicial - sera mostrando o restante da string
console.log(umaString.slice(9))
//texto text

//utilizando numero negativo para visualizar string, o valor negativo sera deduzido do total da string
//se a string tiver 10 posições e a cosulta tiver -8, a posição de impressão sera 8
console.log(umaString.slice(-4))
//text

//imprimindo da direita para esquerda com -4 e olhar total da string para tirar um com -1
console.log(umaString.slice(-4, umaString.length -1))
//tex

//separando stirng em um array, nesse exemplo utilizei o espaço para separar
console.log(umaString.split(' '));
//[ 'Um', 'texto', 'texto', 'text' ]

//pode ser tb adicionado paramento e conrtagem quantos resultado preciso ver
console.log(umaString.split(' ', 2));
//[ 'Um', 'texto' ]

//colocando todas as letras em MAIUSCULAS
console.log(umaString.toUpperCase());
//UM TEXTO TEXTO TEXT

//colocando todas as letras em minusculas
console.log(umaString.toLowerCase());
//um texto texto text
