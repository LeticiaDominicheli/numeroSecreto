alert('Bem vindo ao jogo do número secreto');
let numeroSecreto = 5;
let chute = prompt('Escolha um número entre 1 e 10');

if (chute == numeroSecreto) {
    console.log ('Isso ai! Você descobriu o número secreto (5)');
};

alert('Boas vindas ao nosso site');
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = "Erro! Preencha todos os campos";
alert(mensagemDeErro);
nome = prompt('Digite o seu nome');
idade = prompt('Digite a sua idade');
if (idade >= 18) {
    alert("Pode tirar a habilitação!");
}




let porcentagemDesconto = 0;

if(quantidadeMilhas > 5000){
    porcentagemDesconto = porcentagemDesconto + 10;
}

if(quantidadeMilhas >= 30000){
    porcentagemDesconto = porcentagemDesconto + 20;
} else {
    porcentagemDesconto = 0;
}

console.log('Boas vindas');

let nomee = 'Leticia';

alert(`Olá, ${nome}!`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');


console.log(linguagem);



let valor1 = 10

let valor2 = 20

//valor1 - valor2 = valor3

let resultado = valor2 - valor1

console.log(` A subtração  de ${valor1} e ${valor2} é igual a ${resultado}.`);


let idadee = prompt('Insira a sua idade')

if (idade >= 18) {
    console.log("Maior de idade!");
} else {
    console.log("Menor de idade!");
}

let numero = prompt('Me informe um numero');

if (numero > 0) {
    console.log("O número é Positivo");
} else if (numero < 0) {
    console.log("O número é Negativo");
} else {
    console.log("O número é Zero")
}

let numeroo = 1;

while (numero <= 10) { 
    console.log(numero);
    numero++
  
}


let nota = prompt('Me informe uma nota');

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");

}

//function verificarAprovacao(media) {
// return media >= 5 ? "Aprovado" : "Reprovado";
//}

function calculoIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
  }
  
  calculoIMC(1.54, 60.1);
  
  function calculoFatorial() {
    let imc = peso / (altura * altura);
    return imc;
  }
  
  function calcularFatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado;
  }
  
  
  function calcularFatorial(numero) {
    let resultado = 1;
    let i = 1;
  
    while(i <= numero) {
      resultado = resultado * i;
      i++;
    }
  
    return resultado;
  }
  
  let numero = 5;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);
  
  
  function calcularFatorial(numero) {
    let resultado = 0;
  
    while(numero > 0) {
      resultado *= numero;
      numero--;
    }
    return resultado;
  }
  
  function calculoDolar(quantidadeDolar) {
    let dolar = 4.80;
    let resultado = dolar * quantidadeDolar
    return resultado;
  
  }
  
  console.log(calculoDolar(10))
  
  
  function calculoDolar(quantidadeDolar) {
    let dolar = 4.80;
    let resultado = dolar * quantidadeDolar
    return resultado;
  
  }
  
  console.log(calculoDolar(10))
  
  
  function sala(altura, largura){
    let area = largura * altura;
    let perimetro = (largura+altura)*2
  console.log(`O perimetro é ${perimetro} e a área é ${area}.`)
  }
  
  sala(8, 4);

  function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
  
  // Exemplo de uso
  let raio = 4; // em metros
  calcularAreaPerimetroSalaCircular(raio);

  function calcularTabuada(numero) {
    let i = 1
    while( i <= 10 ) {
      let resultado = i * numero
      console.log(`${numero} x ${i} = ${resultado}`)
      i++;
    }
  }
  calcularTabuada(9);
  calcularTabuada(7);
  calcularTabuada(2);