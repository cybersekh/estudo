// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId)

// let base = 5;
// let height = 8;

// let area = base*height
// let perimeter = 2*(base+height)

// console.log(area)
// console.log(perimeter)

// let nota = 99

// if (nota >= 80 && nota < 101) {
//     console.log("Parabéns, você conseguiu a aprovação!")
// } else if (nota => 60 && nota <= 79) {
//     console.log("Você está em nossa lista de espera.")
// } else if (nota < 60 && nota >0 ){
//     console.log("Você não conseguiu sua aprovação.")
// } else {
//     console.log("Insira um valor entre 0 a 100.")
// }

let nota = 65;

switch (true) {
  case nota >= 80:
    console.log("Aprovado!");
    break;

  case nota >= 60 && nota <= 79:
    console.log("Lista");
    break;

  case nota < 60 && nota > 0:
    console.log("Reprovado!");
    break;

  default:
    console.log("Invalido!");
}

// let currentHour = 27
// let message = ""

// if (currentHour >= 22 ) {
//     message = "Não deveríamos comer nada, é hora de dormir!"
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar! :D"
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?"
// } else if (currentHour >= 11 && currentHour <14) {
//     message = "Hora do almoço!!!"
// } else if (currentHour >=4 && currentHour < 11) {
//     message ="Hmmmm, cheiro de café bem passado!"
// } else {
//     message ="Insira um horário válido."
// }

// console.log(message)

// let weekDay ="segunda"

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe! >:D")
// } else if (weekDay === "sabado" || weekDay === "domingo") {
//     console.log("FINALMENTE, descanso merecido! UwU")
// } else {
//     console.log("Insira um dia da semana por extenso.")
// }
