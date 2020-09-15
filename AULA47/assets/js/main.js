function relogio () {
  function criaHoradosSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  const relogio = document.querySelector('.relogio');
  
  let segundos = 0;
  let timer;
  
  function startRelogio() {
    timer = setInterval(function() {
      segundos++
      relogio.innerHTML = criaHoradosSegundos(segundos);
    }, 1000);
  }
  
  document.addEventListener('click', function(evento) {
    const elemento = evento.target;
    
    if(elemento.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado')
      segundos = 0;
  
    }
    
    if(elemento.classList.contains('iniciar')) {
      relogio.classList.remove('pausado')
      clearInterval(timer);
      startRelogio();
    }
  
    if(elemento.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  
  });
}
relogio();