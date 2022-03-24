window.onload = () => {
  alert('onload pra vc aeee')
}

var body = document.querySelector('body')

const novoBotao = () => {
  var newBotao = document.createElement('button')
  var textoBotaoIniciar = document.createTextNode('Botão iniciar')
  newBotao.appendChild(textoBotaoIniciar)
  body.appendChild(newBotao)
}

novoBotao()

var botaoIniciar = document.querySelector('button')

botaoIniciar.addEventListener('click', () => {
  let formPadrao = `
  <input type="checkbox" name="campoA" />
  <label for="campoA">Você concorda com isso?</label>
  <input type="text" name="campoB" id="campoB" />
  <label for="campoB"></label>
  <input type="submit" />
  <input type="reset" />
  `

  var form = document.createElement('form')
  // var conteudoForm = document.createTextNode(formPadrao)
  form.appendChild(conteudoForm)
  body.appendChild(form)
})

form = document.querySelector('form')

form.addEventListener('submit', event => {
  console.log('Você interrompeu o formulário.')
  event.preventDefault()
})

var p = document.querySelector('p')

p.addEventListener('mouseover', () => {
  p.style.color = 'red'
})

p.addEventListener('mouseout', () => {
  p.style.color = 'blue'
})

var campoB = document.getElementById('campoB')
var contador = document.getElementById('contador')
campoB.addEventListener('keyup', () => {
  contador.innerText = parseInt(contador.innerText) + 1
})
