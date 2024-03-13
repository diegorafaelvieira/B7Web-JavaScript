let fruits = ["Maçã", "Uva", "Laranja", "Banana"];

fruits.sort(); // Ordena os itens do array em ordem alfabética
fruits.reverse(); // Inverte os itens do array

console.log(fruits);

let cars = [
  { brand: "Fiat", year: 2022 },
  { brand: "Bmw", year: 2018 },
  { brand: "Ferrari", year: 2020 },
];

// Ordenar a lista pelo o ano do carro
cars.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else if (a.year < b.year) {
    return -1;
  } else {
    return 0;
  }
});

console.log(cars);
