const numero = Number(prompt("Digite um numero:"))
const numeroTitulo = document.getElementById("numero-titulo");
numeroTitulo.innerHTML = numero;

const raiz = document.getElementById("raiz-quadrada");
raiz.innerHTML = `<span>Raiz quadrada ${numero ** 0.5}</span>`;

const numeroInteiro = document.getElementById("numero-inteiro");
numeroInteiro.innerHTML = `<span>${numero} é inteiro: ${Number.isInteger(numero)}</span>`;

const naoENumero = document.getElementById("Nao-e-numero");
naoENumero.innerHTML = `<span>Não É Número ${numero}:${Number.isNaN(numero)}</span>`;

const arredondamentoPBaixo = document.getElementById("arredondamento-para-baixo");
arredondamentoPBaixo.innerHTML = `<span>Arredondamento para baixo:${Math.floor(numero)}</span>`;

const arredondamentoPCima = document.getElementById("arredondamento-para-cima");
arredondamentoPCima.innerHTML = `<span>Arredondamento para cima: ${Math.ceil(numero)}</span>`;

const duasCasasDecimais = document.getElementById("duas-casas-decimais");
duasCasasDecimais.innerHTML = `<span>Com duas casas decimais: ${numero.toFixed(2)}</span>`;
/** 
const numero = Number(prompt("Digite um numero:"))
const numeroTitulo = document.getElementById("numero-titulo");
numeroTitulo.innerHTML = numero;

const raiz = document.getElementById("raiz-quadrada");
raiz.innerHTML = `<span>Raiz quadrada ${numero ** 0.5}</span>`;

const numeroInteiro = document.getElementById("numero-inteiro");
numeroInteiro.innerHTML = `<span>${numero} é inteiro: ${Number.isInteger(numero)}</span>`;

const naoENumero = document.getElementById("Nao-e-numero");
naoENumero.innerHTML = `<span>Não É Número ${numero}:${Number.isNaN(numero)}</span>`;

const arredondamentoPBaixo = document.getElementById("arredondamento-para-baixo");
arredondamentoPBaixo.innerHTML = `<span>Arredondamento para baixo:${Math.floor(numero)}</span>`;

const arredondamentoPCima = document.getElementById("arredondamento-para-cima");
arredondamentoPCima.innerHTML = `<span>Arredondamento para cima: ${Math.ceil(numero)}</span>`;

const duasCasasDecimais = document.getElementById("duas-casas-decimais");
duasCasasDecimais.innerHTML = `<span>Com duas casas decimais: ${numero.toFixed(2)}</span>`;

*/