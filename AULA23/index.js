/**
 * Valores podem ser avaliado em Falsos:
 * FALSY
 * false
 * 0
 * '', "", ``
 * null / undefined
 * NaN
 * 
 * Qualquer coisa diferente do que foi dito acima é true!
 * 
 * expressão OR bastante utilizada para verificar verdade ,
 * 
 */

 const a = 0;
 const b = null;
 const c = "Verdade";
 const d = false;
 const e = NaN;

 console.log(a || b || c || d || e); //Verdade

