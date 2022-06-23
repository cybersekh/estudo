// 1. Encontre o index através do valor de um elemento
// Escreva uma algoritmo que recebe 2 parâmetros:
//  - Um array contendo um conjunto de números
//  - O valor de um desses elementos
// Procure esse elemento dentro do array, e imprima no terminal a posição index em que o elemento encontra-se.
// Caso não o encontre, imprima:
// -----------------------------------
// "Elemento não encontrado no array"
// -----------------------------------


let numbers = [25, 34, 78, 90];
let valor = 34;

for (let i = 0; i < numbers.length; i+=1) {
    if (numbers[i] === valor) {
        console.log(i)
    } 
}

if (numbers !== i) {
    console.log("Não encontrado!")
}

// GABARITOOO

// let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let element = 3;

// if (arr.indexOf(element) >= 0) {
//   console.log(arr.indexOf(element));
// } else {
//   console.log("Elemento não encontrado no array");
// }





// 2. Retorne os números ímpares
// A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.
// Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.
// Use a seguinte estrutura na impressão:
// ----------------
// "x, y, z, ...n"
// ----------------

// let impares = [];

// for (let i = 1; i < 50; i++) {
//     if (i % 2 == 1) {
//     impares.push(i)
//     }
// }

// console.log(impares)