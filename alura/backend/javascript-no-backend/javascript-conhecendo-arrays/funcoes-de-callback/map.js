const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map(nota => nota <= 9 ? nota + 1 : 10);

console.log(notasAtualizadas);