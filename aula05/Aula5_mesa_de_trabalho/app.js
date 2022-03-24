// var userChoice = prompt('Ativar modo escuro? y/n s/n 1/0')

// var textosETitulos = document.querySelectorAll('h1')

// var darkModeButton = document.getElementById('darkModeButton')

// darkModeButton.addEventListener('click', () => {
//   document.textosETitulos.classList.toggle('darkMode')
// })

// function chooseDarkMode() {
//   if (userChoice === 'y' || userChoice === 's' || userChoice === '1') {
//     document.textosETitulos.classList.add('darkMode')
//   }
// }

// chooseDarkMode()

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
