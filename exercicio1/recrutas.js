//Objetivo: Receber dados do usuário e exibir no console e em um alert

/* A palavra-chave const é usada para declarar uma variável com um valor que não pode ser alterado posteriormente. 
Quando você usa const, está indicando que o valor atribuído à variável não será reatribuído durante a execução do programa.*/

const nome = prompt("Digite seu nome:");
const sobrenome = prompt("Digite seu sobrenome:");
const estudo = prompt("Digite seu grau de estudo:");
const idade = prompt("Digite sua idade:");

//Objetivo: Exibir os dados recebidos do usuário no console e em um alert
alert("Recruta cadastrado com sucesso!\n" + 
    "Nome: " + nome + "\nSobrenome: " + sobrenome + 
    "\nGrau de estudo: " + estudo + "\nIdade: " + idade
);