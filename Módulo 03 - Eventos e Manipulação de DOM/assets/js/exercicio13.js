//Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');

//Função
function adicionar(e) {
  if (e.key === 'Enter') {
    //Criar o li
    const newLi = document.createElement('li');
    //Pega o valor do input
    newLi.innerHTML = input.value;
    //Adiciona no final da lista
    lista.append(newLi);
    //Limpa o input
    input.value = '';
  }
}

//Evento
input.addEventListener('keyup', adicionar);