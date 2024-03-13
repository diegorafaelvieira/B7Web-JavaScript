let fruits = ["Banana", "Laranja", "Maçã", "Pêra"];

// Filtra apenas as frutas com mais de 4 letras
let bigFruits = fruits.filter((value) => {
  return value.length > 4;
});

console.log(bigFruits);

// Se todas as frutas possuem mais de 3 letras
let ok = fruits.every((value) => {
  return value.length > 3;
});

if (ok) {
  console.log("Todos são maiores que 3.");
} else {
  console.log("Não são todos maior que 3.");
}

// Se algumas frutas possuem mais de 3 letras // basta ter 1
let ok2 = fruits.some((value) => {
  return value.length > 3;
});

if (ok2) {
  console.log("Algum item é maior que 3.");
} else {
  console.log("Nenhum item é maior que 3.");
}

// Saber se tem Uva dentro do Array
if(fruits.includes('Uva')) {
  console.log("Tem Uva sim!");
} else {
  console.log("Não tem Uva.");
}