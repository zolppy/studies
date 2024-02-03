const notas = [10, 6.5, 8, 7.5];
let soma = 0;

for (let nota of notas) {
  soma += nota;
}

const media = soma / notas.length;

console.log(`a nota das médias é ${media}`);