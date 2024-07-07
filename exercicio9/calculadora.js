/*
Calculadora Geométrica:
    Escreva um programa em javascript para calcular a área de diferentes
    formas geométricas. O programa deve iniciar com um menu contendo
    as diferentes opções de cálculas. As opções devem ser:

        área do triângulo: base * altura / 2
        área do retângulo: base * altura
        área do quadrado: lado²
        área do trapézio: (base maior + base menor) * altura / 2
        área do círculo: pi * raio² (considere pi = 3.14)
    
    Você deve escrever o programa usando funções sempre que possível para
    separar os procedimentos. O programa também deve ter uma opção de
    “Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

function calcularAreaTriangulo(){
    const base = prompt("Digite a base do triângulo:");
    const altura = prompt("Digite a altura do triângulo:");
    return base * altura / 2;
}

function calcularAreaRetangulo(){
    const base = prompt("Digite a base do retângulo:");
    const altura = prompt("Digite a altura do retângulo:");
    return base * altura;
}

function calcularAreaQuadrado(){
    const lado = prompt("Digite o lado do quadrado:");
    return lado * lado;
}

function calcularAreaTrapezio(){
    const baseMaior = prompt("Digite a base maior do trapézio:");
    const baseMenor = prompt("Digite a base menor do trapézio:");
    const altura = prompt("Digite a altura do trapézio:");
    return (baseMaior + baseMenor) * altura / 2;
}

function calcularAreaCirculo(){
    const raio = prompt("Digite o raio do círculo:");
    return 3.14 * raio * raio;
}

function menu(){
    return prompt(
        "Calculadora Geométrica\n" +
        "1. Calcular área de triângulo\n" +
        "2. Calcular área de retângulo\n" +
        "3. Calcular área de quadrado\n" +
        "4. Calcular área de trapézio\n" +
        "5. Calcular área de círculo\n" +
        "6. Sair\n"
    )
}

function main(){
    let opcao = "";
    
    do{
        opcao = menu();
        let resultado

        switch(opcao){
            case "1":
                resultado = calcularAreaTriangulo();
                alert(`A área do triângulo é ${resultado}`);
                break;
            case "2":
                resultado = calcularAreaRetangulo();
                alert(`A área do retângulo é ${resultado}`);
                break;
            case "3":
                resultado = calcularAreaQuadrado();
                alert(`A área do quadrado é ${resultado}`);
                break;
            case "4":
                resultado = calcularAreaTrapezio();
                alert(`A área do trapézio é ${resultado}`);
                break;
            case "5":
                resultado = calcularAreaCirculo();
                alert(`A área do círculo é ${resultado}`);
                break;
            case "6":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida");
        }

        if(resultado){
            alert(`O resultado é = ${resultado}`);
        }

    }while(opcao != "6");
}

main();