//PRIMEIRA VERSÃO
/*
function iniciarJogo() {
  let iniciaJogo = confirm('Quer jogar "Pedra, papel e tesoura"?')

  if (iniciaJogo) {
    jogar()
  } else {
    document.querySelector('h2').innerText += 'Jogo encerrado. Até logo!'
  }
}

function jogar() {
  let escolhaHumano = parseInt(
    prompt(
      'Escolha "Pedra"[digite 1], "Papel"[digite 2] ou "Tesoura"[digite 3].'
    )
  )

  if (escolhaHumano == 1) {
    alert('Sua escolha foi "Pedra".')
  } else if (escolhaHumano == 2) {
    alert('Sua escolha foi "Papel".')
  } else if (escolhaHumano == 3) {
    alert('Sua escolha foi "Tesoura".')
  } else {
    alert('Por favor, informe um número 1, 2 ou 3.')
    jogar()
  }

  let escolhaComputador = parseInt(Math.random() * 3 + 1)

  if (escolhaComputador == 1) {
    alert('Seu adversário escolheu "Pedra".')
  } else if (escolhaComputador == 2) {
    alert('Seu adversário escolheu "Papel".')
  } else if (escolhaComputador == 3) {
    alert('Seu adversário escolheu "Tesoura".')
  } else {
    escolhaComputador
  }

  if (escolhaHumano == escolhaComputador) {
    alert('Empate! Tentem novamente.')
  } else if (escolhaHumano == 1 && escolhaComputador == 2) {
    alert('Derrota! "Papel" vence "Pedra".')
  } else if (escolhaHumano == 1 && escolhaComputador == 3) {
    alert('Vitória! "Pedra" vence "Tesoura".')
  } else if (escolhaHumano == 2 && escolhaComputador == 1) {
    alert('Vitória! "Papel" vence "Pedra".')
  } else if (escolhaHumano == 2 && escolhaComputador == 3) {
    alert('Derrota! "Tesoura" vence "Papel".')
  } else if (escolhaHumano == 3 && escolhaComputador == 1) {
    alert('Derrota! "Pedra" vence "Tesoura".')
  } else if (escolhaHumano == 3 && escolhaComputador == 2) {
    alert('Vitória! "Tesoura" vence "Papel".')
  }

  iniciarJogo()
}

iniciarJogo()
*/

//SEGUNDA VERSÃO (REFATORAÇÃO)
function iniciarJogo() {
  let iniciaJogo = confirm('Quer jogar "Pedra, papel e tesoura"?')

  if (iniciaJogo) {
    pontuacaoHumano = 0
    pontuacaoComputador = 0
    jogar()
  } else {
    document.querySelector('h2').innerText += 'Jogo encerrado. Até logo!'
  }
}

function jogar() {
  let escolhaHumano = parseInt(
    prompt(
      'Escolha "Pedra"[digite 1], "Papel"[digite 2] ou "Tesoura"[digite 3].'
    )
  )

  if (escolhaHumano == 1) {
    alert('Sua escolha foi "Pedra".')
  } else if (escolhaHumano == 2) {
    alert('Sua escolha foi "Papel".')
  } else if (escolhaHumano == 3) {
    alert('Sua escolha foi "Tesoura".')
  } else {
    alert('Por favor, informe um número 1, 2 ou 3.')
    jogar()
  }

  let escolhaComputador = parseInt(Math.random() * 3 + 1)

  if (escolhaComputador == 1) {
    alert('Seu adversário escolheu "Pedra".')
  } else if (escolhaComputador == 2) {
    alert('Seu adversário escolheu "Papel".')
  } else if (escolhaComputador == 3) {
    alert('Seu adversário escolheu "Tesoura".')
  }

  if (escolhaHumano == escolhaComputador) {
    alert('Empate! Tentem novamente.')
  } else if (escolhaHumano == 1 && escolhaComputador == 2) {
    alert('Derrota! "Papel" vence "Pedra".')
    pontuacaoComputador++
  } else if (escolhaHumano == 1 && escolhaComputador == 3) {
    alert('Vitória! "Pedra" vence "Tesoura".')
    pontuacaoHumano++
  } else if (escolhaHumano == 2 && escolhaComputador == 1) {
    alert('Vitória! "Papel" vence "Pedra".')
    pontuacaoHumano++
  } else if (escolhaHumano == 2 && escolhaComputador == 3) {
    alert('Derrota! "Tesoura" vence "Papel".')
    pontuacaoComputador++
  } else if (escolhaHumano == 3 && escolhaComputador == 1) {
    alert('Derrota! "Pedra" vence "Tesoura".')
    pontuacaoComputador++
  } else if (escolhaHumano == 3 && escolhaComputador == 2) {
    alert('Vitória! "Tesoura" vence "Papel".')
    pontuacaoHumano++
  }

  alert(
    'Sua pontuação: ' +
      pontuacaoHumano +
      '\nPontuação do seu adversário: ' +
      pontuacaoComputador
  )

  if (pontuacaoHumano == 2) {
    document.querySelector('h3').innerText += 'Você venceu o jogo! Parabéns!'
  } else if (pontuacaoComputador == 2) {
    document.querySelector('h3').innerText +=
      'Não foi dessa vez... Tente novamente!'
  } else {
    jogar()
  }
}

let pontuacaoHumano = 0
let pontuacaoComputador = 0
iniciarJogo()
