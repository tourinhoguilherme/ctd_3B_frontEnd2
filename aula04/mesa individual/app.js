// const toggle = document.getElementById('toggle')
// const refresh = document.getElementById('refresh')
// const theme = window.localStorage.getItem('theme')

// /* verifica se o tema armazenado no localStorage é escuro
// se sim aplica o tema escuro ao body */
// if (theme === 'darkMode') document.body.classList.add('darkMode')

// // event listener para quando o botão de alterar o tema for clicado
// toggle.addEventListener('click', () => {
//   document.body.classList.toggle('darkMode')
//   if (theme === 'darkMode') {
//     window.localStorage.setItem('theme', 'light')
//   } else window.localStorage.setItem('theme', 'darkMode')
// })

// refresh.addEventListener('click', () => {
//   window.location.reload()
// })

// var userChoice = prompt('Ativar modo escuro? y/n s/n 1/0')

// var textosETitulos = document.querySelectorAll('h1')

var darkModeButton = document.getElementById('darkModeButton')

var body = document.querySelector('body')

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('darkMode')
})

// .onclick = body.setAttribute('class', 'darkMode')

// darkModeButton.addEventListener('click', () => {
//   document.textosETitulos.classList.toggle('darkMode')
// })

// function chooseDarkMode() {
//   if (userChoice === 'y' || userChoice === 's' || userChoice === '1') {
//     document.textosETitulos.classList.add('darkMode')
//   }
// }

// chooseDarkMode()

//

// const toggle = document.getElementById('toggle')
// const refresh = document.getElementById('refresh')
// const theme = window.localStorage.getItem('theme')

// if (theme === 'dark') document.body.classList.add('dark')

// toggle.addEventListener('click', () => {
//   document.body.classList.toggle('dark')
//   if (theme === 'dark') {
//     window.localStorage.setItem('theme', 'light')
//   } else window.localStorage.setItem('theme', 'dark')
// })

// refresh.addEventListener('click', () => {
//   window.location.reload()
// })
