/* 
Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome,
a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo,
e então calcule a quantidade de dano causado baseado nas seguintes regras:

    1: Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, 
    o dano causado será igual a diferença entre o ataque e a defesa.

    2: Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo,
    o dano causado será igual a metade da diferença entre o ataque e a defesa.

    3: Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do
personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.    

*/

/* 
    Inserindo nome e o poder de um personagem,
    Agora nome, quantidade de vida, poder de defesa de outro personagem e se possui escudo,  
*/

const personagem1 = prompt("Digite o nome do primeiro personagem: ");
const poder1 = parseFloat(prompt("Digite o poder de ataque do personagem: "));

const personagem2 = prompt("Digite o nome do segundo personagem: ");
const vida2 = parseFloat(prompt("Digite a quantidade de vida do personagem: "));
const defesa2 = parseFloat(prompt("Digite o poder de defesa do personagem: "));
const escudo2 = prompt("O personagem possui escudo? (sim ou não)");

/* Calculando a quantidade de dano causado */

let dano;
if(poder1 > defesa2 && escudo2 === "não") {
    dano = poder1 - defesa2;
} else if(poder1 > defesa2 && escudo2 === "sim") {
    dano = (poder1 - defesa2) / 2;
} else {
    dano = 0;
}

/* Subtraindo a quantidade de dano da quantidade de vida do personagem defensor */

vida_atual = vida2 - dano;
alert(
    "O personagem " + personagem1 + " causou " + dano + " de dano ao personagem " + personagem2 + "\n" +
    "A vida do personagem " + personagem2 + " agora é de " + vida_atual
);