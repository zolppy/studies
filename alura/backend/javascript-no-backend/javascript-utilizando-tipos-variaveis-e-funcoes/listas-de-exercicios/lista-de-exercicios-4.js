// Exercício 1
function saudacao(nome) {
  return `Seja bem-vindo(a), ${nome}!`;
}

console.log(saudacao("Qualquer"));

// Exercício 2
function verificaMaioridade(idade) {
  if (idade >= 18) {
      return 'É maior de idade.';
  } else {
      return 'É menor de idade.';
  }
}

console.log(verificaMaioridade(25));
console.log(verificaMaioridade(15));

// Exercício 3
function verificaPalindromo(string) {
  const stringInvertida = string.split('').reverse().join('');
  return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara"));
console.log(verificaPalindromo("Frase"));

// Exercício 4
function encontraMaiorValor(num1, num2, num3) {
  let maior = num1;

  if (num2 > maior) {
      maior = num2;
  }

  if (num3 > maior) {
      maior = num3;
  }

  return maior;
}

console.log(encontraMaiorValor(12, 56, 32));

// Exercício 5
const calculaPotencia = (base, expoente) => {
  return Math.pow(base, expoente);
};

const base = 2;
const expoente = 3;

const resultado = calculaPotencia(base, expoente);
console.log(`O resultado de ${base} elevado a ${expoente} é: ${resultado}`);