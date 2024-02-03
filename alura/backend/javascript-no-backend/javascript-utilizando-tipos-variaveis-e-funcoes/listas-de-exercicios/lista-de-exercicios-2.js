// Exercício 1
let var1 = "frase qualquer";

console.log(`o comprimento da frase é ${var1.length}`);

console.log(`frase escrita em letras maiúsculas: "${var1.toUpperCase()}"`);

// Exercício 2
let var2 = null;
let var3;

console.log(var2, var3);

// Exercício 3
let var4 = 43;
let var5 = "string";
let var6 = true;

let var7 = `${var4}, ${var5}, ${var6}`;

console.log(var7);

// Exercício 4
let var8 = 43;
let var9 = "43";

var8 = var8.toString();
var9 = parseInt(var9);

console.log(typeof var8);
console.log(typeof var9);

// Exercício 5
const string10 = "olá, mundo";

console.log(string10.toUpperCase());
console.log(string10.toLowerCase());
console.log(string10.split(', '));
console.log(string10.slice(0, 3));
console.log(string10.slice(5));