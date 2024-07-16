const vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
        // 1. nome, (x candidatos)
        textoFinal += indice + "-"
        textoFinal += vaga.nome + ", "
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal;
    }, "")

    alert(vagasEmTexto);
}

function novaVaga(){
    const nome = prompt("Nome da vaga:");
    const descricao = prompt("Descrição da vaga:");
    const dataLimite = prompt("Data limite da vaga (dd/mm/aaaa):");

    const confirmacao = confirm(`Nome: ${nome}\nDescrição: ${descricao}\nData limite: ${dataLimite}`);

    if(confirmacao){
        const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
        vagas.push(novaVaga);
        alert("Vaga criada com sucesso!");
    }
}

function exibirVaga(){
    const indice = prompt("Digite o índice da vaga:");
    const vaga = vagas[indice];
    const candidatosemTexto = vaga.candidatos.reduce(function(textoFinal, candidato) {
        return textoFinal + "\n -" + candidato;
    }, "");

    alert(
        "Vaga n " + indice + "\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data limite: " + vaga.dataLimite + "\n" +
        "Quantidade de candidatos: " + vaga.candidatos.length + "\n" +
        "Candidatos:" + candidatosemTexto
    )
}

function inscreverCandidato(){
    const candidato = prompt("Nomde do candidato(a):");
    const indice = prompt("Índice da vaga ao qual o(a) candidato(a) deseja se inscrever:");
    const vaga = vagas[indice];

    const confirmacao = confirm(
        "Nome : " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
    )

    if(confirmacao){
        vaga.candidatos.push(candidato);
        alert("Candidato(a) inscrito(a) com sucesso!");
    }
}

function excluirVaga(){
    const indice = prompt("Digite o índice da vaga que deseja excluir:");
    const vaga = vagas[indice];

    const confirmacao = confirm(
        "Nome : " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
    )

    if(confirmacao){
        vagas.splice(indice, 1);
        alert("Vaga excluída com sucesso!");
    }
}

function exibirMenu(){
    const opcao = prompt(
        "Cadastro de Vagas de Emprego\n" +
        "1- Listar vagas disponíveis\n" +
        "2- Criar uma nova vaga\n" +
        "3- Visualizar uma vaga\n" +
        "4- Inscrever um candidato em uma vaga\n" +
        "5- Excluir uma vaga\n" +
        "6- Sair"
    )

    return opcao;
}

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