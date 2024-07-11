const vagas = [];

function listarVagas() {
    for (const vaga of vagas) {
        console.log(`Índice: ${vaga.indice}, Nome: ${vaga.nome}, Quantidade de Candidatos: ${vaga.quantidadeCandidatos}`);
    }
}

function criarVaga(){
    const nome = prompt("Digite o nome da vaga");
    const descricao = prompt("Digite a descrição da vaga");
    const dataLimite = prompt("Digite a data limite da vaga");

    const confirmacao = prompt(
        "Confirma a vaga(Sim/Não)?\n" +
        "Nome: " + nome + "\n" +
        "Descrição: " + descricao + "\n" +
        "Data Limite: " + dataLimite + "\n"
    );

    if (confirmacao === "Sim") {
        const vaga = {
            indice: vagas.length + 1,
            nome: nome,
            descricao: descricao,
            dataLimite: dataLimite,
            quantidadeCandidatos: 0,
            candidatos: []
        };
        vagas.push(vaga);
        alert("Vaga criada com sucesso");
    } else {
        alert("Operação cancelada");
    }

}

function menu(){
    return prompt(
        "Sistema de Vagas de Emprego\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n"
    )
}

function main(){
    let opcao = "";

    do{
        opcao = menu();

        switch(opcao){
            case "1":
                listarVagas();
                break;

            case "2":
                criarVaga();
                break;

            case "6":
                alert("Saindo...");
                break;

            default:
                alert("Opção inválida");
        }
    }while(opcao != "6");
}

main();



/*
    Sistema de Vagas de Emprego
        Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível
        gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

            Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar
            vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir
            uma vagaSair

            Listar vagas disponíveis
                A opção de listar as vagas deve mostrar o índice, o nome e a
                quantidade de candidatos inscritos de todas as vagas.

            Criar um nova vaga
                A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma
                data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.

            Visualizar uma vaga
                A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações
                dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.

            Inscrever um candidato em uma vaga
                A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da
                vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.

            Excluir uma vaga
                A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir
                que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

            Sair
*/