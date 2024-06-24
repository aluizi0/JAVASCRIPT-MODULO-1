/*
Escreva um programa em javascript que permita inserir o nome e a velocidade 
de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é 
mais rápido (ou que as velocidades são iguais se este for o caso)
*/

/* Inserindo nome e velocidade de dois veiculos */

const veiculo1 = prompt("Digite o nome do primeiro veículo: ");
const velocidade1 = parseFloat(prompt("Digite a velocidade do primeiro veículo: "));

const veiculo2 = prompt("Digite o nome do segundo veículo: ");
const velocidade2 = parseFloat(prompt("Digite a velocidade do segundo veículo: "));

/* Verificando qual veículo é mais rápido e exibindo à tela */

let message;
if (velocidade1 > velocidade2) {
    message = veiculo1 + " é mais rápido que " + veiculo2;
} else if (velocidade2 > velocidade1) {
    message = veiculo2 + " é mais rápido que " + veiculo1;
} else {
    message = veiculo1 + " e " + veiculo2 + " têm a mesma velocidade";
}

alert(message);
