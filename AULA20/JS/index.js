function meuEscopo() {

  const meuForm = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome =       meuForm.querySelector('.nome');
    const sobrenome =  meuForm.querySelector('.sobrenome');
    const peso =       meuForm.querySelector('.peso');
    const altura =     meuForm.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    })
   
    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  meuForm.addEventListener('submit', recebeEventoForm)
  resultado.addEventListener

}

meuEscopo();