// See this in the console to make sure the project is wired up correctly
console.log('The project is UP')

// STEP 1- console.dir document and study it

// STEP 2- Grab the Lambda Cat heading in the console. Access the following:
//  - the id
//  - the list of class names
//  - the data inside a data-attribute
//  - the text content
//  - any attribute

// STEP 3- find the body of the document in the DOM and find:
//  - Its parent element
//  - Its first child element
//  - Its first child element's next sibling element

// STEP 4- find the Lambda Cat heading with firstElementChild and nextSibling

// STEP 5- find the children of the nav, convert it into a real array

// STEP 6- find the following elements or groups of elements:
//  - all the divs in the page
//  - all elements with a className of 'card'
//  - the element with an id of 'mainNav'
const allLinks = document.getElementsByTagName('a') // no CSS selector
const allCards = document.getElementsByClassName('card') // no CSS selector
const logoTitleOld = document.getElementById('logo-title') // no CSS selector

// STEP 7- do the same, but using CSS selectors
const logoTitle = document.querySelector('#logo-title')
const anchorTagsNav = document.querySelectorAll('nav a')

const nav = document.querySelector('nav')
const linksfromNav = nav.querySelectorAll('a')

// STEP 8- use setAttribute to change an attribute of an element

// STEP 9- use style to change inline styles of an element

// STEP 10- use classList to add, remove and toggle a class name

// STEP 11- get a collection of h2s and loop over them setting text content from cardTitles
const cardTitles = {
  cardTitle1: 'Cats Are the Supreme Rulers',
  cardTitle2: 'Cats Rule Dogs Drool',
  cardTitle3: 'Give Me All the Belly Rubs',
  cardTitle4: 'I Haz CheeseBurger',
}

// STEP 11- create a new link and append it to the nav
