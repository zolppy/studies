// Exercício 1
const arr1 = ["um", "dois", "três"];
const arr2 = ["quatro", "cinco", "seis"];

function f(arr1 = [], arr2 = []) {
  return arr1.concat(arr2);
}

console.log(f(arr1, arr2));

// Exercício 2
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);

console.log(parteNumeros);

// Exercício 3
const frutas = ["Maçã", "Banana", "Laranja", "Limão", "Abacaxi"];

frutas.splice(2, 3, "Kiwi", "Pêssego");

console.log(frutas);

// Exercício 4
const menuPrincipal = [
  "opção menu principal 1",
  "opção menu principal 2",
  "opção menu principal 3"
];
const menuDeSobremesas = [
  "opção menu sobremesas 1",
  "opção menu sobremesas 2",
  "opção menu sobremesas 3"
];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);

// Exercício 5
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(linha => console.log(linha));

// Exercício 6
console.log('Elemento na segunda linha e terceira coluna:', matriz[1][2]);

// Exercício 7
matriz[2][1] = 15;
console.log('Matriz após adição de elemento:', matriz);