let exerc1 = document.getElementById('elementoOndeVoceEsta');

let exerc2 = document.getElementById('elementoOndeVoceEsta').parentNode;
exerc2.style.color = 'blue';

let exerc3 = document.getElementById('elementoOndeVoceEsta').firstElementChild;
exerc3.innerText = 'Adicionando um texto ao primeiro filho do filho.';

let exerc4 = elementoOndeVoceEsta.firstElementChild;
exerc4.style.color = 'red';

let exerc5 = elementoOndeVoceEsta.previousElementSibling;

let exerc6 = elementoOndeVoceEsta.nextSibling;
// log as vezes me votla atenção e as vezes me volta #text

let exerc7 = elementoOndeVoceEsta.nextElementSibling;

let exerc8 = pai.lastElementChild.previousElementSibling;
console.log(exerc6);