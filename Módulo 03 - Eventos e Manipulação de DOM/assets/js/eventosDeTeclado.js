function apertou() {
  console.log("APERTOU!");
}

function segurou() {
  console.log("SEGUROU!");
}

function soltou() {
  console.log("SOLTOU!");
}

// Caso não usar o onkeydown onkeypress e onkeyup via Html
// Fazer via JavaScript
//document.addEventListener('keyup', apertou); pega a tela inteira
const input = document.querySelector('input');
input.addEventListener('keydown', apertou);
input.addEventListener('keypress', segurou);
input.addEventListener('keyup', soltou);
