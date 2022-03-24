//CONTEÚDO ASSÍNCRONO

// var nome = 'Guilherme'
// var idade = 35

// dataAtual = new Date()

// console.log(typeof nome)
// console.log(typeof idade)

// var frases = [
//   'Primeira mensagem do array',
//   'Segunda mensagem do array',
//   'Terceira mensagem do array'
// ]

// console.error('teste')
// console.warn('teste')
// console.table(frases)

// alert(dataAtual)

//AULA SÍNCRONA

var numeros = [1, 5, 7, 2, 1]

function somaNumeros() {
  let somador = 0

  for (let numero in numeros) {
    somador += numeros[numero]

    console.log(somador)
  }
}

somaNumeros()

// var numeros = [2, 5, 1, 3, 2]
// var somador = 0

// function somaNumeros(numero) {
//   somador += numero
//   console.log(somador)
// }

// numeros.forEach(somaNumeros)

// let valor = 0
// function soma(i) {
//   valor += i
//   console.log(valor)
// }

// let array = [2, 2, 2, 2, 2]
// console.log(array.forEach(soma))

// function somaDeNumeros(numeros) {
//   for (i = 0; i < numeros.length; i++) {
//     if ((i = 0)) {
//       console.log(numeros[i])
//     } else {
//       var soma = numeros[i] + numeros[i - 1]
//       console.log(soma)
//     }
//   }
// }

// somaDeNumeros(numeros)
