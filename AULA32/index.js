const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
const [lista1,lista2,lista3] = numeros
console.log(lista2[2]);

//                     0            1            2
//                  0  1  2      0  1  2      0  1  2
// const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
// const [,[,,seis]] = numeros
// console.log(seis);


// //                     0            1            2
// //                  0  1  2      0  1  2      0  1  2
// const numeros = [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9] ]
// console.log(numeros[2][0]);//7


// //...rest, ...spred (depente do contexto)
// const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000];
// const [primeiroNumero, segundoNumero, ...resto] = numeros;

// console.log(primeiroNumero,segundoNumero);
// console.log(resto);



// let a = 'A';
// let b = 'B';
// let c = 'C';

// const numeros = [1, 2, 3];
 
// [a, b, c] = numeros;

// console.log(a, b, c)