var completeName = document.getElementById('completeName')

var email = document.getElementById('email')

var estado = document.getElementById('estado')

var signUpForm = document.getElementById('signUpForm')

var signUpError = document.getElementById('signUpError')

signUpForm.addEventListener('submit', function (e) {
  signUpError.innerHTML = ''

  if (completeName.value === '') {
    signUpError.innerHTML +=
      '<li>O campo "Nome completo" deve ser preenchido.</li>'
  }

  if (email.value === '') {
    signUpError.innerHTML += '<li>O campo "E-mail" deve ser preenchido.</li>'
  }

  if (estado.value === '') {
    signUpError.innerHTML += '<li>O campo "Estado" deve ser preenchido.</li>'
  }

  if (signUpError.querySelectorAll('li').length > 0) {
    e.preventDefault()
    signUpError.hidden = ''
  }
})
