const notas = [10, 6.5, 8, 7.5];
const soma = notas.reduce((accumulator, value) => (
  accumulator += value
), 0);
const media = soma / notas.length;

console.log(media);