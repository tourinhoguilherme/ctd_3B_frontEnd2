let perspectiva1 = document.querySelector('.perspectiva1')

let perspectiva2 = document.querySelector('.perspectiva2')

let tipoDePlanejamento = document.querySelectorAll('#tiposDePlanejamento li')

let perspectivas = document.getElementsByClassName('perspectiva')

let mapaEstrategico = document.getElementById('#mapaEstrategico')

for (let i = 0; i < tipoDePlanejamento.length; i++) {
  alert(tipoDePlanejamento[i].innerText)
}

perspectiva1.innerText += 'iva'

perspectiva2.style.backgroundColor = '#456767'

const nome = 'Mauro'
const nomeTemplate = `Olá ${nome}`
alert(nomeTemplate)

function inserirObjetivo(titulo, perspectiva, prazo, responsavel) {
  let body = document.querySelector('body')
  let novoObjetivo = `
  <div class="objetivo">
  <h2>${titulo}</h2>
  <h6>${perspectiva}</h6>
  <p>${prazo}</p>
  <p>${responsavel}</p>
  </div>
  `

  body.innerHTML += novoObjetivo
}

inserirObjetivo('Novo objetivooo', 'Processos internos', '31/12/2022', 'Euzin')
