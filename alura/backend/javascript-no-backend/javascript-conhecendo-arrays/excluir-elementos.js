const notas = [10, 6, 8, 5.5, 10];

notas.pop();

const soma = notas.reduce((accumulator, value) => (
  accumulator += value
), 0);
const media = soma / notas.length;

console.log(media.toFixed(2));