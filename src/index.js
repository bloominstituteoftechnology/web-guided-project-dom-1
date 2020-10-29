// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector(`h2`)
console.log(h2);
const logoTitle = document.querySelector(`logo-title`)
const firstCard = document.querySelector(`div.card:nth-of-type(1)`)
// B- finding within one particular element
const imageFirstCard = document.querySelector(`img`)
const titleFirstCard = document.querySelector(`h2.card-title`)
const subtitleFirstCard = document.querySelector(`h3`)
const textFirstCard = document.querySelector(`p.card-text`)
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
console.log(link1FirstCard);

const link2FirstCard = link2FirstCard.nextElementSibling
console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
document.querySelectorAll(`nav a`)
console.log(navItems)
// B- Loop over the links and console.log their text content
navItems.forEach(a => console.log(a.textContent))
// C- Turn the collection of links into a real array
const arrNavItems = Array.from(navItems)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const result = arrNavItems.filter(a => a.textContent === "Home")

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
document.querySelector(`h1`).textContent = `Lambda Dog`
//  B- Have the students research online the difference between textContent and innerText
document.querySelector(`img.card-img-top`).src = `https://www.keystonepuppies.com/wp-content/uploads/2018/09/Siberian-Husky-Category-e1519318482937.jpg`


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
document.querySelector(`Card-Subtitle`).attributes(`New Title`, `Is this right?`)
//  B- Using .setAttribute to change a few attributes
document.querySelector(`img.card-img-top`).setAttribute(`alt`, `dogs are people/s best friend`)

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.
//  B- By manipulating inline styles on the element
const h2 = document.querySelector(`h2.card-title`)
h2.styles.color = `red`


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogNavItem = document.createElement(`a`)
blogNavItem.textContent = `Blog`
blogNavItem.classList.add(`Blog`)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
document.querySelector(`nav`).appendChild(blogNavItem)
console.log(blogNavItem)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
var el = document.getElementById(`h2`);
el.remove();

var h = document.createElement("h1");
var node = document.createTextNode("Lambda Dogs");
h.appendChild(node);
var el = document.getElementById("logo-container");
el.appendChild(h);

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]