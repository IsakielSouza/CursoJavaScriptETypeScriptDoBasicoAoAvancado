/**
 * Tratando e lançando erros (try, catch, throw)
 * 
 */
// try {
//   console.log(variavelA);
// } catch (err) {
//   console.log(err, 'Erro na função!');
// }

function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('Deu erro, x e y precisam ser numeros!');
  }

  return x + y;
}


try {
  console.log(soma(10,10));
  console.log("##########################");
  console.log(soma('10',10));
} catch (error) {
  console.log(error)
}
