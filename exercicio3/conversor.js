/* 
    Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor
    em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

        milímetro (mm)
        centímetro (cm)
        decímetro (dm)
        decâmetro (dam)
        hectômetro (hm)
        quilômetro (km)

    O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

    O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira
    uma opção diferente das disponíveis (use o break e o default para isso)
*/

const valorEmMetros = parseFloat(prompt("Digite um valor em metros:"))

switch(
    prompt(
        "Digite a unidade de medida para conversão: \n1.Milímetros(mm) \n2.Centimetros(cm) \n3.Decímetro(dm) \n4.Decâmetro(dam) \n5.Hectômetro(hm) \n6.Quiloômetro(km) \n"
    )
) {
    case "mm":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros * 1000 + " milímetros")
        break
    case "cm":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros * 100 + " centímetros")
        break
    case "dm":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros * 10 + " decímetros")
        break
    case "dam":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros / 10 + " decâmetros")
        break
    case "hm":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros / 100 + " hectômetros")
        break
    case "km":
        alert("Resultado: " + valorEmMetros + "m = " + valorEmMetros / 1000 + " quilômetros")
        break
    default:
        alert("Opção inválida")
        break
}