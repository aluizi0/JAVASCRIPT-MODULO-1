/*  
    Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes.
    O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam
    de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em
    alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção
    escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo
    até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo
    encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let option = prompt("Escolha uma opção: \n1. Opção 1 \n2. Opção 2 \n3. Opção 3 \n4. Opção 4 \n5. Encerrar");

while (option !== "5") {
    alert("Opção escolhida: " + option);
    option = prompt("Escolha uma opção: \n1. Opção 1 \n2. Opção 2 \n3. Opção 3 \n4. Opção 4 \n5. Encerrar");
}

alert("Sistema sendo encerrado.");