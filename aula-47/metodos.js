let pessoa = {
    nome: "Aluizio",
    idade: 30,
    falar(){
        console.log("Olá, tudo bem? meu nome é " + this.nome)
    },
}

console.log(pessoa)

pessoa.falar() // "Olá, tudo bem?"