function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  //Append = atualiza sem alterar o conteúdo da memória 
  //ul.children[0].append(" (alterado) ");
  //InnerHTML = atualiza subtituindo o conteúdo da memória
  //ul.children[0].innerHTML += "(alterado)";
  
  //append só interpreta como texto
  //appendChild interpreta como elemento
  let newLi = document.createElement("li");
  newLi.innerText = "Item adicionado";
  ul.appendChild(newLi);

  //append add o elemento no final do conteúdo
  //prepend add o elemento no começo do conteúdo

}