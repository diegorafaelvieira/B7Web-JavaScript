function clicou() {
  const input = document.querySelector("input");
  const botao = document.querySelector(".botao");

  /*   //Pega o tipo do input
  console.log(input.getAttribute('type')); */

  //saber se o input tem placeholder
  /* if(input.hasAttribute('placeholder')) {
    console.log('Tem placeholder SIM')
  } else {
    console.log('Não tem placeholder');
  } */

  //Alterar atributo
  //input.setAttribute('placeholder', 'Placeholder alterado');
  //input.setAttribute('type', 'text');

  if(input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password');
    botao.innerText = "Mostrar Senha";
  } else {
    input.setAttribute('type', 'text');
    botao.innerText = "Ocultar Senha";
  }
}
