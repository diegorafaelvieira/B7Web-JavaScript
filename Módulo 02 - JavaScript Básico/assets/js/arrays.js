let nomes = ['bonieky', 'pedro', 'silvia'];

let lista = ['blabla', nomes];

let lista2 = ['blabla', ['xx', 'yy']];

// Exibir o xx
console.log(lista2[1][0]);

let ingredientes = [
  'agua',
  'farinha',
  'ovo',
  'corante',
  'sal'
];

ingredientes.push('cebola'); // Adiciona na última posição da array
ingredientes.unshift('tomate'); // Adiciona na primeira posição do array 

console.log(ingredientes);

ingredientes.pop(); // Remove o último da array
ingredientes.shift(); // Remove o primeiro da array

console.log(`Total de ingredientes: ${ingredientes}`);