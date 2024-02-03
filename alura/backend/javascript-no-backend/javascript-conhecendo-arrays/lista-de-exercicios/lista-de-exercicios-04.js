// Exercício 1
const arr1 = [1, 2, 3];

arr1.forEach((el, i) => console.log(`${i} - ${el}`));

// Exercício 2
const dobro = (a) => a ** 2;
const metade = (a) => a / 2;
const arr2 = [...arr1];

function executaOperacaoEmArray(arr, callback) {
  arr.forEach((el) => console.log(callback(el)));
}

executaOperacaoEmArray(arr2, dobro);
executaOperacaoEmArray(arr2, metade);

// Exercício 3
const numeros = [...arr1];
const i = numeros.indexOf(1);

console.log(i);

// Exercício 4
const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todasAsTurmas = nomesTurmaA.concat(nomesTurmaB);
const aluno = todasAsTurmas.find((nome) => nome === "Ana Souza") || "";

aluno ?
  console.log(aluno) :
  console.log("Aluno não encontrado");

// Exercício 5
const numeros2 = [6, 9, 12, 15, 18, 21];

numeros2.forEach((numero) => {
  console.log(numero * 3);
})

const i2 = numeros2.findIndex((numero) => numero === 18);

console.log(i2);