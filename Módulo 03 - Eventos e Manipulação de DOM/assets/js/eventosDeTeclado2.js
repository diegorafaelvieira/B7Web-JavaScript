function soltou(e) {
  // code é mais detalhista
  // key é mais simples
  // shiftKey, ctrlKey e altKey retornam true ou false
  console.log('TECLA APERTADA: ' + e.code);
  console.log('SHIFT? ' + e.shiftKey);
  console.log('CTRL? ' + e.ctrlKey);
  console.log('ALT? ' + e.altKey);
  console.log('--');
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
