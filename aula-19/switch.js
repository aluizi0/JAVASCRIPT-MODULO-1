const resultado = prompt("Digite uma letra: \na) \nb) \nc) \n")

const resultadoNumerico = parseInt(resultado)

switch(resultadoNumerico){
    case 1:
        alert("Resultado é 'a'")
        break
    case 2:
        alert("Resultado é 'b'")
        break
    case 3:
        alert("Resultado é 'c'")
        break
    default:
        alert("finalizando")
}