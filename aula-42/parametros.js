function dobro(x) {
    alert("O dobro de " + x + " é " + (x * 2));

}

//dobro();

function dizerOla(nome = "mundo") {
    alert("Olá, " + nome + "!");
}

//dizerOla("Fulano");
//dizerOla();

function soma(x, y) {
    alert("A soma de " + x + " e " + y + " é =" + (x + y));
}

//soma(10, 20);
//soma(30, 40);

function criarUsuario(nome, email, senha, tipo) {
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        tipo: tipo
    };

    console.log(usuario);
}

//criarUsuario("Fulano", "fulano@gmail.com,", "123456", "admin");

function objetoComoParametro(usuario){
    usuario.nome
    usuario.email
}

muitosParametros("nome", "email", "senha", "tipo", "outro");

const dadosDOUsuario = {
    nome: "",
    email: "",
    senha: "",
    tipo: "",
    outro: ""
};

objetoComoParametro(dadosDOUsuario);