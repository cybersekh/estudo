/*
  Essa função recebe um array de números,
  retornando a soma dos dois menores números desse array.

  Parâmetros:
    - Um array de números. Exemplos: [19, 5, 42, 2, 77];

  Comportamento:
    - sumTwoSmallestNumbers([5, 8, 12, 19, 22]) // Retorno: 13
    - sumTwoSmallestNumbers([23, 71, 33, 82, 1]) // Retorno: 24

  Obs.: O array será sempre de no mínimo quatro números positivos.
  Obs2.: Nenhum número flutuante ou negativo fará parte do array de números.
*/

const sumTwoSmallestNumbers = (numeros) => {
  let resultado = 0;
  if (numeros.length < 4) {
    return 'Erro!! Precisa ser pelo menos quatro números.'  
  }
  const arrayOrdenado = numeros.sort(function(a, b) {
  return a - b;
});
  resultado = arrayOrdenado[0] + arrayOrdenado[1];
  return resultado
};


module.exports = sumTwoSmallestNumbers;