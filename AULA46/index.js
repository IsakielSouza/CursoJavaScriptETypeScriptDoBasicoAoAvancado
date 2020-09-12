function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer)
}, 4000);

setTimeout(() => {
  console.log('Olá Mundo!');
}, 6000);

// function mostraHora() {
//   let data = new Date();

//   return data.toLocaleTimeString('pt-BR', {
//     hour12: false
//   });
// }

// function funcaoDoInterval() {
//   console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);