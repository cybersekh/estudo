let botaosoma = document.getElementsByClassName('button')[0];
let botaosub = document.getElementsByClassName('button')[1];
let botaodiv = document.getElementsByClassName('button')[2];
let botaomult = document.getElementsByClassName('button')[3];

botaosoma.addEventListener("click", soma);
botaosub.addEventListener("click", sub);
botaodiv.addEventListener("click", div);
botaomult.addEventListener("click", mult);

let numero1 = document.getElementById('input1');
let numero2 = document.getElementById('input2');


let caixaResultado = document.getElementById('pResult');

function soma () {
    let resultado = parseInt(numero1.value) + parseInt(numero2.value);
    caixaResultado.innerText = resultado;
}

function sub () {
    let resultado = parseInt(numero1.value) - parseInt(numero2.value);
    caixaResultado.innerText = resultado;
}

function div () {
    let resultado = parseInt(numero1.value) / parseInt(numero2.value);
    caixaResultado.innerText = resultado;
}

function mult () {
    let resultado = parseInt(numero1.value) * parseInt(numero2.value);
    caixaResultado.innerText = resultado;
}