//Objetivo: Receber dados do usuário e exibir no console e em um alert
nome = prompt("Digite seu nome:");
sobrenome = prompt("Digite seu sobrenome:");
estudo = prompt("Digite seu grau de estudo:");
idade = prompt("Digite sua idade:");

//Objetivo: Exibir os dados recebidos do usuário no console e em um alert
console.log("Nome completo: " + nome + " " + sobrenome);
console.log("Campo de estudo: " + estudo);
console.log("Idade: " + (new Date().getFullYear() - idade));

//Objetivo: Exibir os dados recebidos do usuário em um alert
window.alert("Cadastro realizado com sucesso!");