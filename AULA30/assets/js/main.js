const data = new Date();

const diaDaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const minutos = data.getMinutes();

console.log(`${diaDaSemana}, ${dia} de ${mes} de ${ano}`);
console.log(`${hora}:${minutos}`);

function verificaDiaDaSemana(num) {
  switch (num) {
    case 0: 
      return `domingo`;
    case 1:
      return `segunda-feira`;
    case 2:
      return `terça-feira`;
    case 3:
      return `quarta-feira`;
    case 4:
      return `quinta-feira`;
    case 5:
      return `sexta-feira`;
    case 6:
      return `sábado`;
  }
  
}

function verificaMes(num) {

switch (num) {
  case 0:
    return `Janeiro`;
  case 1:
    return `Fevereiro`;
  case 2:
    return `Março`;
  case 3:
    return `Abril`;
  case 4:
    return `Maio`;
  case 5:
    return `Junho`;
  case 6:
    return `Julho`;
  case 7:
    return `Agosto`;
  case 8:
    return `Setembro`;
  case 9:
    return `Outubro`;
  case 10:
    return `Novembro`;
  case 11:
    return `Dezembro`;
  }
}

function zeroAEsquerda(num) {
  num <10 ? ''
}

const conteudo = document.querySelector(".container");
conteudo.innerHTML = `<h1>${verificaDiaDaSemana(diaDaSemana)}, ${dia} de ${verificaMes(mes)} de ${ano}</h1>`;
conteudo.innerHTML +=`<h1>${hora}:${minutos}</h1>`;