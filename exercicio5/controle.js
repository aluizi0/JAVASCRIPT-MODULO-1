/*
    Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela
    essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar
    dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar
    novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo
    o valor. A opção de sair deve encerrar o programa.
*/

let dinheiro = parseFloat(prompt("Digite a quantidade inicial de dinheiro disponível:"))

let option = prompt("Escolha uma opção: \n1. Adicionar dinheiro \n2. Remover dinheiro \n3. Sair")

while (option !== "3") {
    if (option === "1"){
        let valor = parseFloat(prompt("Digite a quantidade a ser adicionada:"))
        dinheiro += valor
    }
    else if (option === "2"){
        let valor = parseFloat(prompt("Digite a quantidade a ser removida:"))
        dinheiro -= valor
    }
    alert("Dinheiro disponível: " + dinheiro)
    option = prompt("Escolha uma opção: \n1. Adicionar dinheiro \n2. Remover dinheiro \n3. Sair")
}

alert("Programa encerrado.")
