var submit = document.querySelector('#submit')

submit.addEventListener('click', function (e) {
  e.preventDefault()

  var name = document.querySelector('#name').value
  var lastName = document.querySelector('#lastName').value

  //concatenar
  var completeName = name.concat(' ', lastName)

  document.getElementById('concat').innerHTML = completeName

  //letras maiúsculas
  var upperCaseName = completeName.toUpperCase()
  document.getElementById('toUpperCase').innerHTML = upperCaseName

  //letras minúsculas
  var lowerCaseName = completeName.toLowerCase()
  document.getElementById('toLowerCase').innerHTML = lowerCaseName

  //substuição de letras por números
  var lettersForNumbers = completeName.replaceAll('e', '3').replaceAll('a', '@')
  document.getElementById('replaceAll').innerHTML = lettersForNumbers
})
