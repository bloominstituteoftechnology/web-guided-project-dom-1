// See this in the console to make sure the project is wired up correctly
console.log('The project is UP')

// STEP 1- console.dir document and study it

// STEP 2- Grab the Lambda Cat heading in the console. Access the following:
//  - the .id
//  - the .classList
//  - the data inside a data-attribute using .dataset
//  - the text content using .textContent
//  - any attribute using .getAttribute('id') // example using id

// STEP 3- find the body of the document in the DOM and find:
//  - Its parentElement
//  - Its firstElementChild
//  - Its firstElementChild's nextSibling element

// STEP 4- find the Lambda Cat heading with firstElementChild and nextSibling

// STEP 5- find the children of the nav, convert it into a real array

// STEP 6- NO CSS SELECTOR - find the following elements or groups of elements:
//  - all the divs in the page
//  - all elements with a className of 'card'
//  - the element with an id of 'mainNav'
const allLinks = document.getElementsByTagName('a') // [COLLECTION]
const allCards = document.getElementsByClassName('card') // [COLLECTION]
const logoTitleOld = document.getElementById('logo-title') // [SINGLE ELEMENT]

// STEP 7- do the same, but using CSS selectors
const logoTitle = document.querySelector('#logo-title') // [SINGLE ELEMENT]
const anchorTagsNav = document.querySelectorAll('nav a') // [COLLECTION]

const nav = document.querySelector('nav') // [SINGLE ELEMENT]
const linksfromNav = nav.querySelectorAll('a') // [COLLECTION]

// STEP 8- use setAttribute to change an attribute of an element

// STEP 9- use style to change inline styles of an element
//  - make the first h3 subheading be a different color
//  - make all the h3 subheadings be a different color using a loop

// STEP 10- use classList to add, remove and toggle a class name
//  - remove the 'extra-stuff' class name from the last paragraph
//  - add it to the first paragraph
//  - toggle it in the second paragraph

// STEP 11- get a collection of h2s and loop over them setting text content from cardTitles
const cardTitles = {
  cardTitle1: 'Cats Are the Supreme Rulers',
  cardTitle2: 'Cats Rule Dogs Drool',
  cardTitle3: 'Give Me All the Belly Rubs',
  cardTitle4: 'I Haz CheeseBurger',
}

// STEP 12- create a new link and append it to the main nav
const newLinkProps = {
  href: '#',
  textContent: 'Site Map',
  className: 'menu-item',
}
