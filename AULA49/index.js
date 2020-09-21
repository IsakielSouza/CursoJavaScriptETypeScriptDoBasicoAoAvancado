// Declaração de função (Function hoisting)
falaOi();
function falaOi() {
  console.log('Oie!!!');
}

//First-class objects (Objetos de primeira classe)
//Function expression
const souUmDado = function() {
  console.log('Sou um dado.');
}

function executaFuncao(funcao) {
  console.log('Vou executar sua função!!!');
  funcao();
}

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log('Arrow function!!!')
}

funcaoArrow();

//função dentro de um objeto
const obj = {
  falar: function() {
    console.log('Falar...');
  },
  falar2() {
    console.log('Falar2...')
  }
}

obj.falar();
obj.falar2();