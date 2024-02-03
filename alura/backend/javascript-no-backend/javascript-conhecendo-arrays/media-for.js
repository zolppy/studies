const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let i = 0, total = notas.length; i < total; i++) {
  soma += notas[i];
}

const media = soma / notas.length;

console.log(`a nota das médias é ${media}`);