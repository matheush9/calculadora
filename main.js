const saida = document.getElementById('saida');
let arrValores = [];
let num = '';
let resultado = '';

// Recebe o valor que foi digitado e imprime na tela
function add(entrada) {
  arrValores.push(entrada);
  num = '';
  for (i = 0; i < arrValores.length; i++) {
    num += arrValores[i];
    saida.innerHTML = num;
  }
}

// Opera os valores dentro da variavel "num" e imprime
document.getElementById('igual').addEventListener('click', function () {
  resultado = eval(num);
  arrValores = [];
  arrValores.push(resultado);
  saida.innerHTML = resultado;
})

document.getElementById('reset').addEventListener('click', function () {
  saida.innerHTML = 0;
  arrValores = [''];
  num = '';
})

// Apaga o ultimo numero ou operador digitado
document.getElementById('del').addEventListener('click', function () {
  arrValores.pop();
  num = arrValores.join('');
  saida.innerHTML = num;
  console.log(num)
  if (num == '') {
    saida.innerHTML = 0;
  }
})