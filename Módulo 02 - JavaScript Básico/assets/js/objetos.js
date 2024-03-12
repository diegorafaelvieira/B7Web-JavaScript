let personagem = {
  nome: 'Bonieky',
  idade: 90,
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    forca: 20,
    magia: 5,
    stamina: 15
  }
}

console.log(`${personagem.nome} tem ${personagem.idade} anos`);
console.log(`Cor do olhos: ${personagem.olhos[1]}`);
console.log(`Magia: ${personagem.caracteristicas.magia}`);

personagem.nome = 'Pedro'; //altera o nome
personagem.caracteristicas.forca += 5; //adicionando mais 5 de força
personagem.olhos.push('verde'); //adicionando nova cor

console.log("Nome: " + personagem.nome);
console.log("Força: " + personagem.caracteristicas.forca);
console.log("Olhos: " + personagem.olhos[2]);



let personagem2 = {
  nome: 'Bonieky',
  idade: 90,
  carros:[
    {modelo: 'Fiat', cor: 'preto'},
    {modelo: 'Ferrari', cor: 'vermelho'}
  ]
}

console.log(personagem2.carros[0].cor); // cor do 1º carro



//Função dentro de um objeto
let pessoa = {
  nome: "Diego",
  sobrenome: "Vieira",
  idade: 39,
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome}`;
  }
}

console.log("Nome completo: " + pessoa.nomeCompleto()); //acessando a função