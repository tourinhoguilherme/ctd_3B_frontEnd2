var button = document.querySelector('.submit')

button.addEventListener('click', function (e) {
  e.preventDefault()

  var main = document.getElementById('main')

  var titleField = document.getElementById('title')
  var title = titleField.value

  var descriptionField = document.getElementById('description')
  var description = descriptionField.value

  var imageURLField = document.getElementById('imageURL')
  var imageURL = imageURLField.value

  let cardContainer = document.createElement('div')
  document.main.appendChild(cardContainer)
  let cardImage = document.createElement('img')
  let cardTitle = document.createElement('h3')
  let cardDescription = document.createElement('p')

  let titleText = document.createTextNode(title)
  let descriptionText = document.createTextNode(description)

  cardContainer.appendChild(cardImage)
  cardContainer.appendChild(cardTitle)
  cardContainer.appendChild(cardDescription)
  cardTitle.appendChild(titleText)
  cardDescription.appendChild(descriptionText)

  cardImage.setAttribute('src', imageURL)
})
