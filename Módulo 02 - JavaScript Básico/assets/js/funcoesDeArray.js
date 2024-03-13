let fruits = ["Maça", "Uva", "Laranja", "Banana"];

fruits.push("Kiwi"); // Adiciona item novo no final do array
fruits.pop(); // Deleta o último item do array
fruits.shift(); // Deleta o 1º item do array
console.log(fruits.join(", ")); // Junta todos os itens do array separando por vírgula

fruits[0] = 'Pêra'; //Alterna o valor o index zero de maça para pêra
fruits[fruits.length - 1] = 'Maçã';  //Altera o valor do último item do array

console.log(fruits);
console.log(fruits.length); // Exibe o tamanho do array
