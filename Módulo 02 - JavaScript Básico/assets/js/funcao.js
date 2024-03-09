/*Exemplo 1*/
function gravidade() {
  console.log("A gravidade do planeta é: ");
  console.log(9.8);
}

console.log("Opa, tudo bem?");
gravidade();

/*Exemplo 2*/
function somar(n1, n2) {
  let resultado = n1 + n2;
  console.log("Resultado: " + resultado);
}

somar(10, 15);

/*Exemplo 3*/
function nomeCompleto(nome, sobrenome) {
  console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Bonieky", "Lacerda");
nomeCompleto("Diego", "Vieira");


function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Diego", "Vieira");
console.log('Completo: ' + completo);
console.log(nomeCompleto("Diego", "Rafael"));

/*Exemplo 4*/
function maiorDeIdade(idade) {
  if(idade >= 18) {
    return true;
  } else {
    return false;
  }
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
  console.log("É maior de idade");
} else {
  console.log("É menor de idade");
}