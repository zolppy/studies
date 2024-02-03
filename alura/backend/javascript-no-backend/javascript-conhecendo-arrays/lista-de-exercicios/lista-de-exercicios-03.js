// Exercício 1
const arr1 = [1, 2, 3];

for (let el of arr1) {
  console.log(el);
}

// Exercício 2
const arr2 = [1, 2, 3];

for (let i = 0; i < arr2.length; i++) {
  console.log(i, arr2[i]);
}

// Exercício 3
const arr3 = [1, 2, 3];

function soma(arr = []) {
  return arr3.reduce((accumulator, value) => accumulator += value, 0);
}

console.log(soma(arr3));

// Exercício 4
const arr4 = [1, 2, 3];

function f(arr = []) {
  let maior = arr[0];
  let menor = arr[0];

  for (let i = 0; i < arr.length; i++) {
    maior = arr[i] > maior ? arr[i] : maior;
    menor = arr[i] < menor ? arr[i] : menor;
  }

  return `o menor número é ${menor} e o maior número é ${maior}`;
}

console.log(f(arr4));

// Exercício 5
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

for (let numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

// Exercício 6
const arr5 = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];
let soma2 = 0;

for (let i = 0; i < arr5.length; i++) {
  soma2 += arr5[i];
}

const media = soma2 / arr5.length;

console.log(media);