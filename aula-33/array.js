// Objetivo: criação do array
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// Adicionar elementos
// push
let tamanho = arr.push("Bombril");
console.log(arr);
console.log(tamanho);

// unshift
tamanho = arr.unshift("Bombril");
console.log(arr);
console.log(tamanho);

// Remover elementos
// pop
let removedItem = arr.pop();
console.log(arr);
console.log(removedItem);

// shift
removedItem = arr.shift();
console.log(arr);
console.log(removedItem);

// Pesquisar elementos
// Includes

const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf

const indice = arr.indexOf("Gandalf");
console.log(indice);

// cortar e concatenar
// slice

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4); // pega os 4 últimos elementos
console.log(arr);
console.log(hobbits);
console.log(outros);