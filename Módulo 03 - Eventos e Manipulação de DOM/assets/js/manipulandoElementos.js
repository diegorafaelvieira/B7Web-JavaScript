function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

 //Altera o item 
/* ul.innerHTML = "<li>Item alterado</li>"; */
 //Adicionar conteúdo novo
/*  ul.innerHTML += "<li>Item alterado</li>"; */
//Pega o 1º li e alterar
ul.children[0].innerHTML = "Item <strong>alterado</strong>!";
//outerHTML 
console.log(ul.outerHTML);

}