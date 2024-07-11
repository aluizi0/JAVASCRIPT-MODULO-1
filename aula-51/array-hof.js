const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//map

//const nomes = [];

//for (let i=0; i < personagens.length; i++) {
//    nomes.push(personagens[i].nome)
//}

const nomes = personagens.map(function(personagens){
    return personagens.nome
})

console.log(nomes)

//Filter

//const orcs = [];

//for (let i=0; i < personagens.length; i++) {
//    if (personagens[i].raca === "Orc") {
//        orcs.push(personagens[i])
//    }
//}

//console.log(orcs)

const orcs = personagens.filter(function(personagens){
    return personagens.raca === "Orc"
})

console.log(orcs)

//Reduce

const nivelTotal = personagens.reduce(function (acumulado, personagens){
    return acumulado + personagens.nivel    
}, 0)

console.log(nivelTotal)

const racas = personagens.reduce(function (valorAcumulado, personagens){
    if(valorAcumulado[personagens.raca]){
        valorAcumulado[personagens.raca].push(personagens)
    } else {
        valorAcumulado[personagens.raca] = [personagens]
    }

    return valorAcumulado
}, {})

console.log(racas)

//sort= compara dois elementos e reordena os elementos 

const personagensOrdenados = personagens.slice().sort(function (a, b){
    return b.nivel - a.nivel
})

console.log(personagens)

console.log(personagensOrdenados)