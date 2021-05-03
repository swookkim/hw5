// Get a reference to the "click me" button
let clickMeButton = document.querySelector('.click-me')

// Event listener for the "click me" button
clickMeButton.addEventListener(`click`, async function(event) {
  // Get a reference to the page title element from the DOM
  let pageTitleElement = document.querySelector(`.page-title`)

  // Modify the page title element's contents
  pageTitleElement.innerHTML = `Movies to watch!`
})

// Get a reference to the "add a movie" link
let addMovieLink = document.querySelector('.add-movie')

// Event listener for the "add a movie" link
addMovieLink.addEventListener(`click`, async function(event) {
  // Prevent the link's default behavior
  event.preventDefault()

  // Get a reference to the bulleted list of movies
  let movieList = document.querySelector(`.movies-to-watch`)

  // Add an new list item to the bulleted list of movies
  movieList.insertAdjacentHTML(`beforeend`, `
    <li>Spaceballs</li>
  `)
})

// Get a reference to the "zoom image" button
let zoomImageButton = document.querySelector(`.zoom-image`)

// Event listener for the "zoom image" button
zoomImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  image.classList.toggle(`border-pink-500`)

  // Make the image larger
  image.classList.toggle(`w-96`)
  image.classList.toggle(`w-full`)
})

// Get a reference to the "change image" button
let changeImageButton = document.querySelector(`.change-image`)

// Event listener for the "change image" button
changeImageButton.addEventListener(`click`, async function(event) {
  // Get a reference to the image
  let image = document.querySelector(`img`)

  // Change the image
  image.setAttribute(`src`, `../images/grogu2.jpg`)
})

// Get a reference to the "say hi" button
let sayHiButton = document.querySelector(`.say-hi`)

// Event listener for the "say hi" button
sayHiButton.addEventListener(`click`, async function(event) {
  // Prevent the default behavior
  event.preventDefault()

  // Get a reference to the input field that holds the first name
  let nameInput = document.querySelector(`#first-name`)

  // Get the value from the input field
  let firstName = nameInput.value

  // Get a reference to the greeting element
  let greetingElement = document.querySelector(`.greet`)

  // first name should have a value
  if (firstName.length > 0) {
    // Create a sentence to put in the greeting
    let sentence = `Hi, ${firstName}!`

    // Set the greeting elements HTML to the sentence
    greetingElement.innerHTML = sentence
  } else {
    // if first name doesn't have a value, blank out the greeting
    greetingElement.innerHTML = ``
  }
})