var mainTitle = document.querySelector('h1')
var body = document.querySelector('body')

mainTitle.style.color = 'blue'

body.style.backgroundColor = 'gray'

var listas = document.querySelector('ul')

// listas.style.textAlign = 'center'
// listas.style.maxWidth = '250px'

document.querySelector()
document.querySelectorAll()
document.getElementsByClassName()
document.getElementById()

listas.forEach(elemento => {
  elemento.classList.add('dadosAlterados')
})
