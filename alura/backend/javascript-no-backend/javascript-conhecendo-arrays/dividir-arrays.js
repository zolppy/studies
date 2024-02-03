const listEstudantes = ["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5", "Nome 6", "Nome 7", "Nome 8", "Nome 9", "Nome 10", "Nome 11", "Nome 12", "Nome 13", "Nome 14", "Nome 15", "Nome 16", "Nome 17", "Nome 18", "Nome 19", "Nome 20"];

const metade = listEstudantes.length / 2;
const sala1 = listEstudantes.slice(0, metade);
const sala2 = listEstudantes.slice(metade);

console.log(sala1);
console.log(sala2);