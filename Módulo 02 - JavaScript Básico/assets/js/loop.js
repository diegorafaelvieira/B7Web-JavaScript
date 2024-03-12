for (n = 0; n < 15; n++) {
  console.log("Frase qualquer: " + n);
}

//Loop em Array
let cores = ["preto", "branco", "azul", "vermelho"];
cores.push("verde");

for (n = 0; n < cores.length; n++) {
  console.log(cores[n]);
}

//For simples pegando a chave do array
for (let i in cores) {
  console.log(cores[i]);
}

let cores2 = [
  { nome: "preto", qt: 10 },
  { nome: "azul", qt: 5 },
  { nome: "vermelho", qt: 15 },
];

//For pega o valor
for (let cor of cores2) {
  console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}


// While
let numero = 0;

while(numero <= 10) {
  console.log(`O número da vez é ${numero}`);
  numero++;
}