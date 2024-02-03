// Exercício 1
const arrayEsparso = [undefined, undefined, 2];

arrayEsparso[1] = 3;
arrayEsparso[3] = -1;
arrayEsparso[7] = 32;

console.log(arrayEsparso);
console.log(arrayEsparso.length);

// Exercício 2
const array = [0, 0, 0, 0, 0];

console.log(array);

array[0] = -1;

console.log(array);

// Exercício 3
const meuArray = [];

meuArray.push(3, 2, 1);

console.log(meuArray);

meuArray[0] *= 2;

console.log(meuArray);

// Exercício 4
const array2 = [];

array2.push(-1, 0, 1);

console.log(array2);

// Exercício 5
const clinica = [];

clinica.push("macaco", "gato", "cachorro");

console.log(clinica);

clinica.pop();
clinica.pop();
clinica.pop();

console.log(clinica);