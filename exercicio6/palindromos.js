/*
    Escreva um programa em javascript que seja capaz de identificar se uma palavra é um
    palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas
    letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma
    palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um
    palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da
    esquerda para direita e da direita para esquerda.
*/

let palavra = prompt("Digite uma palavra: ");

let isPalindrome = true;
for (let i = 0; i < palavra.length / 2; i++){
    if (palavra[i] != palavra[palavra.length - 1 - i]){
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    alert("A palavra: " + palavra + " é um palíndromo.");
} else {
    alert("A palavra: " + palavra + " não é um palíndromo.");
    alert("Palavra da esquerda para direita: " + palavra);
    alert("Palavra da direita para esquerda: " + palavra.split('').reverse().join(''));
}

