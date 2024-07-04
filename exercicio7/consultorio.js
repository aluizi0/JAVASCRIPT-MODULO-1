/*
    Fila de Espera:
    Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
    O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
    esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).
    O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo
    paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro
    paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser 
    encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

let fila = [];
let opcao = "";

do{
    let pacientes = "";
    for(let i=0; i<fila.length;i++){
        pacientes += (i+1) + "º " + fila[i] + "\n";
    }

    opcao = prompt("Fila de Espera\n\n" + pacientes + "\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair");

    switch(opcao){
        case "1":
            let nome = prompt("Digite o nome do paciente:");
            fila.push(nome);
            break;
        case "2":
            if(fila.length > 0){
                alert("Paciente consultado: " + fila.shift());
            }else{
                alert("Não há pacientes na fila");
            }
            break;
        case "Sair":
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida");
    }

}while(opcao != "Sair");

