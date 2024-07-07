/*
        Cadastro de Imóveis
    Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
    Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
    O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
    O menu deve ter a opção de salvar um imóvel.
    Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
    Nome do proprietário.
    Quantidade de quartos.
    Quantidade de banheiros.
    Se possui garagem.
    O menu também deve ter a opção de mostrar todos os imóveis salvos.

*/

const imoveis = [];
let opcao = "";

do{
    opcao = prompt(
        "Bem vindo a imobiliária\n" +
        "Total de Imóveis: " + imoveis.length + "\n" +
        "\n\nEscolha uma opcao:\n1. Novo imóvel\n2. Lista imóveis\n3. Sair"
    )
    switch(opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Iforme o nome do proprietário do imóvel");
            imovel.quartos = parseInt(prompt("Informe a quantidade de quartos"));
            imovel.banheiros = parseInt(prompt("Informe a quantidade de banheiros"));
            imovel.garagem = prompt("Possui garagem? (S/N)").toUpperCase() === "S";

            const confirmacao = confirm(
                "Salvar imóvel?\n" +
                "Proprietário: " + imovel.proprietario + "\n" +
                "Quartos: " + imovel.quartos + "\n" +
                "Banheiros: " + imovel.banheiros + "\n" +
                "Garagem: " + (imovel.garagem ? "Sim" : "Não")
            )

            if(confirmacao){
                imoveis.push(imovel);
                alert("Imóvel salvo com sucesso!");
            }

        case "2":
            for(let i = 0; i < imoveis.length; i++){
                alert(
                    "Imóvel: " + (i + 1) + "\n" +
                    "Proprietário: " + imoveis[i].proprietario + "\n" +
                    "Quartos: " + imoveis[i].quartos + "\n" +
                    "Banheiros: " + imoveis[i].banheiros + "\n" +
                    "Garagem: " + (imoveis[i].garagem ? "Sim" : "Não")
                )
            }
        case "3":
            alert("Encerrando...");
            break;
        default:
            alert("Opção inválida");
    }
}while(opcao !== "3");