const toggle = document.getElementById('toggle')
const refresh = document.getElementById('refresh')
const theme = window.localStorage.getItem('theme')

if (theme === 'dark') document.body.classList.add('dark')

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  if (theme === 'dark') {
    window.localStorage.setItem('theme', 'light')
  } else window.localStorage.setItem('theme', 'dark')
})

refresh.addEventListener('click', () => {
  window.location.reload()
})

var botaoVerMais = document.createElement('button')

var textoBotao = document.createTextNode('Veja mais!')

botaoVerMais.appendChild('textoBotao')

document.body.appendChild('botaoVerMais')

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById('myCheck')
  // Get the output text
  var text = document.getElementById('text')

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = 'block'
  } else {
    text.style.display = 'none'
  }
}
