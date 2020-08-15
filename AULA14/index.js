//IEEE 754 - 2008

//OBSERVAÇÕES EM JAVASCRIPT A UM PROBLEMA COM NUMEROS PONTO FLUTUANTE,

//let num1 = 0.7;
//let num2 = 0.1;
//console.log(num1+num2) //0.7999999999999999

//PARA CORRIGI UTILIZAMOS parseFloat, exemplo
//num1 += 0.1 //0.8
//num1 += 0.1 //0.9
//num1 += 0.1 //1.0

//num1 = num1.toFixed(2)
//console.log(num1)
//verificando se numero é inteiro ou ponto flutuante
//console.log(Number.isInteger(num1));
//1.00
//false  - resultado ainda é falso,
//ENTAO PARA RESOLVER USAMOS A FUNÇÃO parsefloat
//num1 = parseFloat(num1.toFixed(2))
//num1 = Nunmber(num1.toFixed(2))

//console.log(num1);
//console.log(Number.isInteger(num1));

//###############################################
//Segudna forma de fazer a correção dos numeros sem funções
//let num1 = 0.7;
//let num2 = 0.1;

//num1 = ((num1 * 100) + (num2 * 100)) / 100;// 0.8
//num1 = ((num1 * 100) + (num2 * 100)) / 100;// 0.9
//num1 = ((num1 * 100) + (num2 * 100)) / 100;// 1.0

//console.log(num1);
//console.log(Number.isInteger(num1));







//let num1 = 10.61565132165; //Number
//let num2 = 2.5; //Number

//

//concatenando numeros em mode de execução (temporario)
//console.log(num1.toString() + num2)
//
//convertendo numeros em string
//num1 = num1.toString();
//console.log(num1 + num2);

//convertando numeros decimais para:
//se parametro for 2, sera binario, se for 16 hexadecimal
//console.log(num1.toString(2))

//diminui casas decimais de um numero, valor informado é a qtd de cadas a mostrar
//muito cuidado, é recomendado usar o toFixes apenas para mostra no final de calculos evitando erros nos subtotais
//console.log(num1.toFixed(2));

//verificando se numero é inteiro ou de ponto flutuante
//console.log(Number.isInteger(num1));

//calculo de number com string retorna Nan
//let temp = num1 * 'Olá';
//console.log(temp);

//para verificar retorno é Nan
//console.log(Number.isNaN(temp));