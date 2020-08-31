/**
 * Switch Case
 */

const data = new Date();
const dataDiaDaSemana = data.getDay();

 function resultDiaDaSemana(dataDiaDaSemana) {
  switch(dataDiaDaSemana) {

    case 0:
      return ('Domingo');
    case 1:
      return ('Segunda');
    case 2:
      return ('Terça')
    case 3:
      return ('Quarta')
    case 4:
      return ('Quinta')
    case 5:
      return ('Sexta')
    case 6:
      return ('Sábado')
    }
 }

  console.log(dataDiaDaSemana, resultDiaDaSemana(dataDiaDaSemana))