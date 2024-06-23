const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

const resultados = (valor1 === valor2) ? valor1 + ' é igual a ' + valor2 : valor1 + ' não é igual a ' + valor2;
console.log(resultados);

/*
const idade = prompt('Digite a sua idade: ');

if(idade >= 18){
    console.log('Você é maior de idade');
} else if(idade > 12) {
    console.log('Você é menor de idade');
} else if(idade > 4) {
    console.log('Você é uma criança');
} else {
    alert('.');
}
*/