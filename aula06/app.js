const urlImagens = []

const imagens = document.querySelectorAll('img')

imagens.forEach((_, index) => {
  const url = prompt(`Informe a url para a imagem: ${index + 1}`)
  urlImagens.push(url)
})

urlImagens.forEach((url, index) => {
  const imagem = document.querySelector(`#imagem${index + 1}`)

  imagem.setAttribute('src', url)
})

alert(urlImagens)
console.log(urlImagens)

// imagens.forEach()

pegar a tag A pela class
criar variavel pra seleção
setattribute(src
setattribute(href
(href,url)
(src,url)

target, blank
