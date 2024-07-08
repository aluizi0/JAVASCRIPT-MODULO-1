function calcular(a, b, operacao) {
    console.log("Calculando...")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y) {
    console.log("Somando...")
    return x + y
}

console.log(calcular(10, 20, somar))

console.log(calcular(10, 20, function(x, y){
    console.log("Subtraindo...")
    return x - y
}))

function exibirElemento(elemento, indice, array) {
    console.log(`Elemento: ${elemento}, Índice: ${indice}, Array: ${array}`)
}

const lista = ["maçã", "banana", "laranja", "uva"]

for(let i = 0; i < lista.length; i++) {
    exibirElemento(lista[i], i, lista)
}

lista.forEach(exibirElemento)

lista.forEach(function(elemento, indice, array){
    console.log(`Elemento: ${elemento}, Índice: ${indice}, Array: ${array}`)
})