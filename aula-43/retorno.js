function calcularMedia(a, b){
    const media = (a + b) / 2;
    return media;
}
const resultado = calcularMedia(10, 8);
console.log(resultado);

function criarProduto(nome, preco){
    const produto = {
        nome: nome,
        preco: preco,
        estoque: 1
    };
    return produto;
}

//const notebook = criarProduto('Notebook', 2199.99);

function areaRetangular(base, altura){
    return base * altura;
}

function areaQuadrado(lado){
    return areaRetangular(lado, lado);
}

//console.log(areaRetangular(10, 5));

//console.log(areaQuadrado(10));

function ola(){
    let texto =".."
    return texto; // apos o return nada funciona
    texto = "oi";
    console.log(texto);
}

console.log(ola());

function maioridade(idade){
    if(idade >= 18){
        return true;
    }else{
        return false;
    }
}

console.log(maioridade(17));
console.log(maioridade(18));