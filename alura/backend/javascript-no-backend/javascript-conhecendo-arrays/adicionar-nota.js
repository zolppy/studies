const notas = [10, 6, 8];

notas.push(7);

const soma = notas.reduce((accumulator, value) => (
  accumulator += value
), 0);
const media = soma / notas.length;

console.log(media);