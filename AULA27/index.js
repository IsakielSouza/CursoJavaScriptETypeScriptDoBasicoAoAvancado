/**
 * OPERADOR TERNARIO
 * (condição) ? valor para verdadeira : valor para falso;
 */

const pontuacaoUsuario = 99;

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario VIP' : 'Usuario Normal';
console.log(nivelUsuario)


const corUsuario = null; /// null é igual a false,
const corPadrao = corUsuario || 'Preta' //se varialvel true, se não Preta, "Fallback"


//  if(pontuacaoUsuario >= 999) {
//    console.log('Usuario VIP');
//  } else {
//    console.log('Usuario Normal');
//  }