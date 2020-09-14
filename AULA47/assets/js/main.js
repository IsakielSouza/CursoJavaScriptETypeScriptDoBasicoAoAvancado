function criaHoradosSegundos(seconds) {
  const data = new Date(seconds * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}


const relogio = document.querySelector('.relogio');
const inicar = document.querySelector('.inicar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let time;

function startRelogio() {
  time = setInterval(function() {
    segundos++
    relogio.innerHTML = criaHoradosSegundos(segundos);
  }, 1000);
}

inicar.addEventListener('click', function(event) {
  clearInterval(time);
  startRelogio();
});

pausar.addEventListener('click', function(event) {
  clearInterval(time);
});

zerar.addEventListener('click', function(event) {
  clearInterval(time);
  relogio.innerHTML = '00:00:00'
  segundos = 0;
});