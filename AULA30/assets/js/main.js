const h1 = document.querySelector('.container h1')
const data = new Date();

h1.innerHTML =
  data.toLocaleDateString('pt-BR', {dateStyle: 'full'});
h1.innerHTML += "<br>"
h1.innerHTML += data.toLocaleTimeString('pt-BR', {timeStyle: 'short'});


//new Intl.DateTimeFormat([pt-BR[, 'short']])

// const conteudo = document.querySelector(".container h1");
// const data = new Date();

// function verificaDiaDaSemana(num) {
//     const diasDaSemana = ['Domingo', 'Segunda', 'Terça',
//       'Quarta', 'Quinta', 'Sexta', 'Sábado'];
//     return diasDaSemana[num]
//   }

// function verificaMes(num) {
//   const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
//     'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

//     return meses[num];
// }

// function zeroAEsquerda(num) {
//   const zero = num >= 10 ? num : `0${num}`;
  
//   return zero;
// }

// function criaData(data) {

//   const diaDaSemana = data.getDay();
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = data.getMonth();
//   const ano = data.getFullYear();
//   const hora = data.getHours();
//   const minutos = zeroAEsquerda(data.getMinutes());
    
// return (
//   `${verificaDiaDaSemana(diaDaSemana)}, ${dia} de ${verificaMes(mes)} de ${ano} ` +
//   `${hora}:${minutos}`
//   );
// }

//   conteudo.innerHTML = criaData(data);



  //############################################################################

// const conteudo = document.querySelector('.container h1');
// const data = new Date();
// conteudo.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full' }, ` `);
// conteudo.innerHTML += data.toLocaleTimeString('pt-BR', { timeStyle: 'short' });



// const conteudo = document.querySelector(".container h1");
// const data = new Date();

// function verificaDiaDaSemana(num) {
//   switch (num) {
//     case 0: 
//       return `domingo`;
//     case 1:
//       return `segunda-feira`;
//     case 2:
//       return `terça-feira`;
//     case 3:
//       return `quarta-feira`;
//     case 4:
//       return `quinta-feira`;
//     case 5:
//       return `sexta-feira`;
//     case 6:
//       return `sábado`;
//     }
    
//   }

// function verificaMes(num) {

//   switch (num) {
//     case 0:
//       return `Janeiro`;
//     case 1:
//       return `Fevereiro`;
//     case 2:
//       return `Março`;
//     case 3:
//       return `Abril`;
//     case 4:
//       return `Maio`;
//     case 5:
//       return `Junho`;
//     case 6:
//       return `Julho`;
//     case 7:
//       return `Agosto`;
//     case 8:
//       return `Setembro`;
//     case 9:
//       return `Outubro`;
//     case 10:
//       return `Novembro`;
//     case 11:
//       return `Dezembro`;
//   }
// }

// function zeroAEsquerda(num) {
//   const zero = num >= 10 ? num : `0${num}`;
  
//   return zero;
// }

// function criaData(data) {

//   const diaDaSemana = data.getDay();
//   const dia = zeroAEsquerda(data.getDate());
//   const mes = data.getMonth();
//   const ano = data.getFullYear();
//   const hora = data.getHours();
//   const minutos = zeroAEsquerda(data.getMinutes());
    
// return (
//   `${verificaDiaDaSemana(diaDaSemana)}, ${dia} de ${verificaMes(mes)} de ${ano} ` +
//   `${hora}:${minutos}`
//   );
// }

//   conteudo.innerHTML = criaData(data);