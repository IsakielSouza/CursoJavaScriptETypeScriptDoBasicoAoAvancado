const a = {
  nome: "Isakiel",
  sobrenome: "Souza"
}

//const b = a;
const b = {...a};

console.log(a);

a.nome = "Leticia"
b.sobrenome = "Moreira"
console.log(a);
console.log(b);



/**
 * Referência (mutável) - array, object, function
 */
//obs aponto para o mesmo local da memoria
// let a = [1,2,3];
// let b = a;
// console.log(a, b);

// a.push(4);
// console.log(a, b)

// b.pop(4);
// console.log(a, b);




/**
 * Primitivos (imutáveis) - string, number, boolean,
 * undefined, null (bigint, symbol - Valor) 
 */
//obs aponto para lugares diferentes na memoria
//  let a = "A";
//  let b = a;//é uma cópia
//  console.log(a, b);

//  a = "outra coisa";
//  console.log(a, b);
