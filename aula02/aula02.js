// prompt()

// confirm()

// alert()

// parseInt()

// parseFloat()

// Math.max()

// Math.round()

// Math.random()

//for in

//for of

//mesa de trabalho

// let maoUsuario = parseInt(prompt('Pedra(1) Papel(2) ou Tesoura(3)'))
// let random = parseInt(Math.random() * 3 + 1)

// let maoComputador = random

// console.log(maoUsuario)
// console.log(maoComputador)

// alert(maoComputador)

// let resultado = 'Sem cálculo'

// if (maoUsuario == 1) {
//   if (maoComputador == 1) {
//     resultado = 'Empate'
//   }
//   if (maoComputador == 2) {
//     resultado = 'Derrota'
//   }
//   if (maoComputador == 3) {
//     resultado = 'Vitória'
//   }
// }

// if (maoUsuario == 2) {
//   if (maoComputador == 1) {
//     resultado = 'Vitória'
//   }
//   if (maoComputador == 2) {
//     resultado = 'Empate'
//   }
//   if (maoComputador == 3) {
//     resultado = 'Derrota'
//   }
// }

// if (maoUsuario == 3) {
//   if (maoComputador == 1) {
//     resultado = 'Derrota'
//   }
//   if (maoComputador == 2) {
//     resultado = 'Vitória'
//   }
//   if (maoComputador == 3) {
//     resultado = 'Empate'
//   }
// }

// alert(resultado)

/*
alert('Olá companheiro(a)!')

let resultado = confirm('Deseja incluir o cliente?')

console.log(resultado)

let nome = prompt('Informe seu primeiro nome:')

alert('Olá ' + nome)

document.querySelector('p').innerText += ' ' + nome

let idade = parseInt(prompt('Informe sua idade:'))

document.querySelector('h2').innerText += idade

let altura = parseFloat(prompt('Informe sua altura:'))

document.querySelector('h3').innerText += altura

// let numeros = [1, 3, 5, 6, 8, 12, 7, 11]
// let maiorNumero = Math.max(numeros)
// let maiorNumero = numeros.reduce(function (a, b) {
//   return Math.max(a, b)
// })
let maiorNumero = Math.max(1, 3, 5, 16, 8, 12, 7, 11)

alert(maiorNumero)*/

let clientes = [
  { nome: 'Guilherme', cpf: '01112086102', naturalidade: 'Rio de Janeiro' },
  { nome: 'Luisa', cpf: '02237453160', naturalidade: 'Ituiutaba' }
]

for (let cliente in clientes) {
  console.log(clientes.nome)
}

let filmes = ['Friends', 'Vikings', 'The Office', 'Seinfeld']

for (let valor of filmes) {
  console.log(valor)
}
