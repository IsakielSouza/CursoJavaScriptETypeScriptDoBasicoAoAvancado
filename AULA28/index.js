// //http://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

// const fusoHorarioBrasil = 60 * 60 * 3 * 1000;
// const data = new Date(+fusoHorarioBrasil);
// console.log(data.toString());
// //Thu Jan 01 1970 00:00:00 GMT-0300 (GMT-03:00)

// //somando um dia
// const umDia = 60 * 60 * 24 * 1000;

// const data2 = new Date(0+umDia+fusoHorarioBrasil)
// console.log(data2.toString())

// //em js os meses são armazenados em um array, entao começa com index 0 a 11
// const data = new Date(2020, 0, 10, 11, 42, 31, 500)//2020-01-10T14:42:31.500Z
//                  //  (AAAA, M, DD, HH, mm, ss, mss) ANO, MES, DIA, HORA, MINUTOS, SEGUNDO, MILESIMO DE SEGUNDO 
// console.log(data);//2020-01-01T03:00:00.000Z

const data = new Date('2020-08-31 11:45:00'); //Mon Aug 31 2020 11:45:00 GMT-0300 (GMT-03:00)
console.log(data.toString());