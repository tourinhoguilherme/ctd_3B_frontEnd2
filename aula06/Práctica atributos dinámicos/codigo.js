//1- Agregar a la tarjeta, el atributo "class" con el valor "card"

var tarjeta = document.getElementById('tarjeta')

window.onload = tarjeta.classList.add('card')

//2- Agregar a la imagen, el atributo "src" con el valor "https://www.youtube.com/img/desktop/yt_1200.png"

var logo = document.getElementById('logo')

window.onload = logo.setAttribute(
  'src',
  'https://www.youtube.com/img/desktop/yt_1200.png'
)

//3- Quitarle al titulo la clase que le está dando un formato feo

var h1 = document.querySelector('h1')

window.onload = h1.classList.remove('titulo-feo')

//4- Chequear si el link a youtube posee o no el atributo href

var link_youtube = document.getElementById('link_youtube')

window.onload = () => {
  if (link_youtube.hasAttribute('href')) {
    link_youtube.style.color = 'blue'
  } else {
    link_youtube.style.color = 'red'
  }
}

//5- Obtener el href del link a wikipedia y mostrarlo por consola

var link_wikipedia = document.getElementById('link_wikipedia')

window.onload = console.log(link_wikipedia.getAttribute('href'))
