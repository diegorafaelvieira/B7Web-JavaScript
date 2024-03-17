function clicou() {
  const teste = document.querySelector("#teste");
  const ul = teste.querySelector("ul");

  //Add nova lista
  let newUl = document.createElement('ul');
  ul.after(newUl);
  
  for(i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + (i+1);
    newUl.append(newLi);
  }


  //Add um novo botão 
  /*const newButton = document.createElement("button");
  newButton.innerHTML = "Botão";

  //after = depois
  //before = antes
  ul.after(newButton);  */
}
