const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [
        [7, 8, 9],
        [10, 11, 12],
    ],
]

console.log(arr)
console.log(arr[0])
console.log(arr[0][0])
console.log(arr[2][1][0])

const matriz = [
    ["l1, c1", "l1, c2", "l1, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"],
]
/*
console.table(matriz)

matriz[0].push("Nova linha")
matriz[1].push("Nova coluna")

console.table(matriz)*/

for (let i = 0; i < matriz.length; i++){
    for (let j =0; j < matriz[i].length; j++){
        const elemento = matriz[i][j]
        console.log("Posição: (" + i + ", " + j + ") - Valor: " + elemento)
    }
}