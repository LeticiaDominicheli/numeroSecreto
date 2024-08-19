let desafio = document.querySelector('h1');
desafio.innerHTML = 'Hora do Desafio';

function batatinha() {
    console.log('O botão foi clicado!');
}

function alerta() {
    alert('EU amo JS!');
}

function promp() {
    let cidade = prompt('Me diga uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function sominha() {

    let numero1 = parseInt(prompt('Me informe 1 número'));

    let numero2 = parseInt(prompt('Me informe outro número'));

    let resultado = numero1 + numero2

    alert(resultado);
}