console.log('The project is UP')

const cardTitles = {
  cardTitle1: 'Cats Are the Supreme Rulers',
  cardTitle2: 'Cats Rule Dogs Drool',
  cardTitle3: 'Give Me All the Belly Rubs',
  cardTitle4: 'I Haz CheeseBurger',
}

// old
const allLinks = document.getElementsByTagName('a') // no CSS selector
const allCards = document.getElementsByClassName('card') // no CSS selector
const logoTitleOld = document.getElementById('logo-title') // no CSS selector

// more modern
const logoTitle = document.querySelector('#logo-title')
const anchorTagsNav = document.querySelectorAll('nav a')

const nav = document.querySelector('nav')
const linksfromNav = nav.querySelectorAll('a')

// get a collection of H2s lacking good text and save them into a variable 
// use a for loop to set the .textContent of each h2 to be the right thing
// from the "cardTitles"
const h2s = document.querySelectorAll('h2.card-title')

function doIt() {
  // pull the values of the cardTitles object into an array
  const contents = Object.values(cardTitles)
  for (let i = 0; i < h2s.length; i++) {
    // at each iteration, set the .textContent to be the right thing
    h2s[i].textContent = contents[i]
    h2s[i].style.color = 'pink'
    h2s[i].style.fontWeight = 'bold'
  }
}

doIt()

// making new elements and appending them to the DOM

const newLink = document.createElement('a') // making the element
newLink.href = '#Nice' // setting attributes (setAttribute)
newLink.textContent = 'Nice' // set content
newLink.classList.add('menu-item') // set class names etc
// the parent that will contain the new node
nav.appendChild(newLink)
