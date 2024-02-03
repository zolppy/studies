// Exercício 1
let saldo = 5000;
let deposito = 1540;
let saque = 300;
let operacao = "deposito";

operacao === "saque" ?
  saldo -= saque :
  saldo += deposito;

console.log(saldo);

// Exercício 2
let var1 = 43;

43 % 2 == 0 ? console.log("par") : console.log("ímpar");

// Exercício 3
let estaLogado = true;
let temPermissao = true;

estaLogado && temPermissao ? console.log("acesso concedido") : console.log("acesso negado");

// Exercício 4
let var2 = true;
let var3 = false;

console.log(var2 || var3);

// Exercício 5
const idadeMinima = 18;
const idadeUsuario = 18;

idadeUsuario >= idadeMinima ?
  console.log("o usuário pode realizar a compra") :
  console.log("o usuário não pode realizar a compra");