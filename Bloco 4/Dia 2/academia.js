// 1. Descubra a idade mínima
// Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza.
// Imprima no terminal uma mensagem informando a pessoa mais jovem no formato:
// --------------------------------------------------
// "x é a pessoa mais jovem e possui y anos de idade"
// --------------------------------------------------

// let Marina = 10;
// let Silvia = 5;
// let Iza = 17;

// if (Marina < Silvia && Marina < Iza) {
//     console.log(Marina)
// } else if (Silvia < Marina && Silvia < Iza) {
//     console.log(Silvia)
// } else if (Iza < Marina && Iza < Silvia) {
//     console.log(Iza)
// }


// 2. Taxa Metabólica Basal
// Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
//  em seu site, vamos ajudá-la escrevendo um algoritmo.
// Ele recebe os seguintes dados:
//  - age: número maior que 0
//  - sex: M ou F
//  - weight: Em (kg) com número maior que 0
//  - height: Em (cm) com número maior que 0
// A fórmula para homens:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5
// A fórmula para mulheres:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161
// Imprima no terminal o resultado do cálculo no formato:
// -----------------------------------
// "A taxa metabólica basal é: x Kcal"
// -----------------------------------

// let age = 27;
// let sex = "F";
// let weight = 65;
// let height = 170;
// let taxa = (height * 6.25) + (weight*9.99) - (age*4.92)

// if (sex === "F") {
//     taxa = taxa + 5
// } else {
//     taxa = taxa - 161
// }

// console.log(taxa)

// 3. Lanchonete da Trybe
// A Trybe abriu uma lanchonete e precisa criar um menu de opções para que as pessoas consigam
//  escolher qual lanche maravilhoso irão pedir.
// Para isso escreva um algoritmo que recebe o número da opção escolhida conforme a tabela abaixo 
//  e imprima no terminal a mensagem de acordo com a opção escolhida.
// Tabela:
// "1 - Trybe Lanche Feliz"
// "2 - McTrybe"
// "3 - TrybeWooper"
// "4 - X-Trybe"
// "5 - Triplo Trybe com JS"
// Caso a pessoa escolha uma opção inexistente, imprima no terminal:
// -----------------------------------
// "Ainda não possuímos esta opção :("
// -----------------------------------

// let lanche = 1;

// switch(lanche) {
//     case 1:
//     console.log("Trybe Lanche Feliz!");
//     break;
//     case 2:
//     console.log("McTrybe");
//     break;
//     case 3:
//     console.log("TrybeWooper");
//     break;
//     case 4:
//     console.log("X-Trybe");
//     break;
//     case 5:
//     console.log("Tripo Trybe com JS");
//     break;

//     default:
//     console.log("Ainda não possuímos esta opção :(");
//     break;
// }

