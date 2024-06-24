//Objetivo: Receber dois valores e realizar operações matemáticas com eles
const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

//Objetivo: Realizar operações matemáticas com os valores recebidos
const soma = valor1 + valor2;
const subtracao = valor1 - valor2;
const multiplicacao = valor1 * valor2;
const divisao = valor1 / valor2;

//Objetivo: Exibir os resultados das operações matemáticas no console
alert('Resultados das operações matemáticas:\n' + 
    'Soma: ' + soma + 
    '\nSubtração: ' + subtracao + 
    '\nMultiplicação: ' + multiplicacao + 
    '\nDivisão: ' + divisao);