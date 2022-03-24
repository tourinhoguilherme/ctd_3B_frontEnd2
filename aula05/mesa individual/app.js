//BOTÃO MODO ESCURO
var darkModeButton = document.getElementById('darkModeButton')

var body = document.querySelector('body')

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('darkMode')
})

//INCLUSÃO DE CARDS

const felinos = [
  {
    titulo: 'O tigre',
    imagem: '/aula05/mesa individual/imagens/tiger.jpg',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    titulo: 'O leão',
    imagem: '/aula05/mesa individual/imagens/leon.jpg',
    texto:
      'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
  },
  {
    titulo: 'O tigre',
    imagem: '/aula05/mesa individual/imagens/leopardo.jpg',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    titulo: 'O tigre',
    imagem: '/aula05/mesa individual/imagens/pantera-negra.jpg',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    titulo: 'O tigre',
    imagem: '/aula05/mesa individual/imagens/jaguar.jpg',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  },
  {
    titulo: 'O tigre',
    imagem: '/aula05/mesa individual/imagens/chita.jpg',
    texto:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
  }
]

var loadItemsButton = document.getElementById('loadItemsButton')

var container = document.querySelector('.container')

function loadItem(imagem, titulo, texto) {
  let item = `<img src="${imagem}" />
          <h2>${titulo}</h2>
  <p>${texto}</p>`
  return item
}

loadItemsButton.addEventListener('click', () => {
  for (let i in felinos) {
    let f = felinos[i]
    let newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = loadItem(f.imagem, f.titulo, f.texto)
    container.appendChild(newItem)
  }
})

// loadItems.addEventListener('click', () => {
//   let newItem = document.createElement(item)
//   // let newItemContent = document.createTextNode(item)
//   // newItem.appendChild(newItemContent)
//   document.container.appendChild(newItem)
// }
