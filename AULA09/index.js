/**
 * Dados Primitivos
 * String, Number, Undefined, Null, boolean , symbol - ver depois
 */

 const nome = 'Isakiel'; //String
 const nome1 = "Isakiel"; //String
 const nome2 = `Isakiel`; //Template string
 const nun1 = 10; // Number
 const nun2 = 10.52; // Number
 let nomeAluno; // Undefined -> Não aponta pra local nenhuma na memória
 const sobrenomeAluno = null; // Nulo -> Não aponta pra local nenhuma na memória
 const boolean = true; // Boolean = true, false (lógico)
/*
 let a = [1,2];
 let b = a;
console.log(a,b);
b.push(3);
console.log(a,b)
*/

let a = 2;
let b = a;
console.log(a,b) //2 2
a = 3;
console.log(a,b) //3 2