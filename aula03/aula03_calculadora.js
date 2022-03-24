import somar from './somar.js'
import subtrair from './subtrair.js'
import multiplicar from './multiplicar.js'
import dividir from './dividir.js'

function calcular(x, operacao, y) {
  let resultado
  if (operacao == '+') {
    resultado = somar(x, y)
  } else if (operacao == '-') {
    resultado = subtrair(x, y)
  } else if (operacao == '*') {
    resultado = multiplicar(x, y)
  } else if (operacao == '/') {
    resultado = dividir(x, y)
  }
  alert('O resultado da operação é: ' + resultado)
}

let x = parseFloat(prompt('Informe um número:'))
let operacao = prompt('Escolha uma operação: +, -, * ou /.')
let y = parseFloat(prompt('Informe outro número:'))

calcular(x, operacao, y)

// switch (operacao) {
//   case '+':
//     {
//       let resultado = somar(x, y)
//     }
//     break
//   case '-':
//     {
//       let resultado = subtrair(x, y)
//     }
//     break
//   case '*':
//     {
//       let resultado = multiplicar(x, y)
//     }
//     break
//   case '/':
//     {
//       let resultado = dividir(x, y)
//     }
//     break
// }
