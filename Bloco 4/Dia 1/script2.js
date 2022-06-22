// Exercício 1

// let a = 5;
// let b = 2;

// let soma = a+b
// console.log(soma)

// let sub = a-b
// console.log(sub)

// let mult = a*b
// console.log(mult)

// let div = a/b
// console.log(div)

// let mod = a % b
// console.log(mod)

// Exercicio 2

// let num1 = 10;
// let num2 = 45;

// if (num1>num2) {
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// Exercicio 3

// let num1 = 150;
// let num2 = 230;
// let num3 = 30;

// if (num1 > num2 && num1 > num3) {
//     console.log(num1)
// } else if (num2 > num1 && num2>num3) {
//     console.log(num2)
// } else if (num3 > num1 && num3 > num2) {
//     console.log(num3)
// }

// Exercicio 4

// let num = -1

// if (num>0) {
//     console.log("positivo")
// } else {
//     console.log ("negativo")
// }

// Exercicio 5

// let ang1 = 150
// let ang2 = 35
// let ang3 = 58

// if (ang1 + ang2 + ang3 <= 180) {
//     console.log("true")
// } else {
//     console.log ("false")
// }

// Exercicio 6

// let entrada = "horse"
// entrada = entrada.toLowerCase()

// switch (entrada) {
//     case "pawn":
//         console.log("frente")
//         break;
//     case "tower":
//         console.log("laterais")
//         break;
//     case "bishop":
//         console.log("diagonais")
//         break;
//     case "horse":
//         console.log("em L")
//         break;
//     case "queen":
//         console.log("qualquer")
//         break;
//     case "king":
//         console.log("uma casa")
//         break;
//     default:
//         console.log("invalido") 
// }

// Exercicio 7

// let nota = -50

// if (nota >= 90 && nota <= 100) {
//     nota = "A";
// } else if (nota >= 80 && nota < 90) {
//     nota = "B";
// } else if (nota >= 70 && nota < 80) {
//     nota = "C";
// } else if (nota >= 60 && nota < 70) {
//     nota = "D";
// } else if (nota >= 50 && nota < 60) {
//     nota = "E";
// } else if (nota < 50 && nota >= 0) {
//     nota = "F";
// } else {
//     nota = "erro!";
// }

// console.log(nota)

// Exercio 8 

// let num1 = 2;
// let num2 = 1;
// let num3 = 3;

// if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// Exercio 9 

// let num1 = 2;
// let num2 = 4;
// let num3 = 8;

// if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// Exercicio 10

// let valorCusto = 11;
// let valorVenda = 15;
// let lucro = "";

// impostoSobreCusto = valorCusto *0.2
// valorTotal = valorCusto + impostoSobreCusto
// lucro = valorVenda - valorTotal

// console.log(lucro.toFixed(2)) // dica do Michel Ferreira

// Exercicio 11

// let salario = 3000

//     if (salario >= 0 && salario <= 1556.94) {
//     inss = salario * 0.08
//     salarioBruto = salario - inss
// } else if (salario >= 1556.95 && salario <= 2594.92 ) {
//     inss = salario * 0.09
//     salarioBruto = salario - inss
// } else if (salario >= 2594.93 && salario <= 5189.82) {
//     inss = salario * 0.11
//     salarioBruto = salario - inss
// } else if (salario >= 5189.93) {
//     inss = salario - 570.88
//     salarioBruto = salario - inss
// }


// if (salarioBruto > 0 && salarioBruto <= 1903.98) {
//     salarioReal = salarioBruto;
// } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
//     salarioReal = salarioBruto * (1 - 0.075) + 142.80;
// } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
//     salarioReal = salarioBruto* (1 - 0.015) + 354.80;
// } else if (salarioBruto >=  3751.06 && salarioBruto <= 4664.67) {
//     salarioReal = salarioBruto * (1-0.225) + 636.13;
// } else if (salarioBruto >= 4664.68) {
//     salarioReal = salarioBruto * (1-0.275) + 869.36;
// }

// console.log(salarioReal)
