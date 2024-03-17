function clicou() {
  const button = document.querySelector('button');

  /* //Adicionar uma classe a mais
  button.classList.add('verde');
  //Remover uma classe
  button.classList.remove('azul');
  */

  //Alternar entre Remover ou Adicionar um item
  //button.classList.toggle('azul');

  //Verificar se tem uma classe
  if(button.classList.contains('azul')) {
    /* button.classList.remove('azul');
    button.classList.add('verde'); */
    button.classList.replace('azul', 'verde');
  } else {
    /* button.classList.add('azul');
    button.classList.remove('verde'); */
    button.classList.replace('verde', 'azul');
  }
}