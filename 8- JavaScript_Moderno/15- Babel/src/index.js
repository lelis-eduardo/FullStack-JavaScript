// Criando um array aleatório de número de 0 a 10
// let seqNumbers = [1, 1, 1, 5, 6, 2, 2, 3, 3, 4];
let seqNumbers = [];

for (let i = 0; i < 10; i++) seqNumbers[i] = Math.floor(Math.random() * 10);

console.log(`Sequência de números: ${seqNumbers}`);

// Calculando média aritmética
function mediaAritmetica(...numbers) {
  let soma = numbers.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return soma / numbers.length;
}

console.log(`Média aritmética: ${mediaAritmetica(...seqNumbers)}`);
// O "..." passa um elemento por vez à função

// Calculando a média ponderada
const pesos = [];

for (let i = 0; i < 10; i++) pesos[i] = i + 1;

console.log(`Pesos: ${pesos}`);

function mediaPonderada(...numbers) {
  let dividendo = numbers.reduce(
    (acumulador, valorAtual, indiceAtual) =>
      acumulador + valorAtual * pesos[indiceAtual],
    0
  );

  let divisor = pesos.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );

  return (dividendo / divisor).toFixed(2);
}

console.log(`Média ponderada: ${mediaPonderada(...seqNumbers)}`);

// Calculando a mediana
function mediana(...numbers) {
  numbers.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  console.log(`Sequência ordenada: ${numbers}`);

  if (numbers.length % 2 === 1) return numbers[Math.floor(numbers.length / 2)];
  if (numbers.length % 2 === 0) {
    let indice = numbers.length / 2;
    let num1 = numbers[indice];
    let num2 = numbers[indice - 1];
    let mediana = (num1 + num2) / 2;
    return mediana;
  }
}

console.log(`Mediana: ${mediana(...seqNumbers)}`);

// Calculando a moda - Fixando exercício
const mode = (...numbers) => {
  const quant = numbers.map((num) => [
    num,
    numbers.filter((n) => num === n).length,
  ]);
  quant.sort((a, b) => b[1] - a[1]);
  return quant[0][0];
};

console.log(`Moda: ${mode(...seqNumbers)}`);

// Calculando a moda
function moda(...numbers) {
  // [ [n, qtd], [n, qtd], [n, qtd]]
  let freqs = numbers.map((number) => [
    number,
    numbers.filter((num) => num === number).length,
  ]);

  let numModa = freqs.sort((a, b) => b[1] - a[1]);

  return numModa[0][0];
}

console.log(`Moda: ${moda(...seqNumbers)}`);
