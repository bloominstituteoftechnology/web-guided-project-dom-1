// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header")

const logoTitle = document.querySelector('#logoTitle')

const firstCard = document.querySelector('.card')
console.log(firstCard)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')

const titleFirstCard =firstCard.querySelector('.card-title')

const subtitleFirstCard = firstCard.querySelector('.card-subtitle')

const textFirstCard = firstCard.querySelector('.card-text')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const anchorTags = document.querySelectorAll('nav a')
// B- Loop over the links and console.log their text content
anchorTags.forEach(anchor =>console.log(anchor.textContent))
// C- Turn the collection of links into a real array
const realArrayOfanchorTags = Array.from(anchorTags)
console.log(realArrayOfanchorTags)
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAnchor = realArrayOfanchorTags.filter(anchor=> anchor.textContent === "Home")
console.log(homeAnchor)
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Moo Cow"
subtitleFirstCard.textContent = "Lovely Cat"
//  B- Have the students research online the difference between textContent and innerText

/*textContent returns the text content of all elements, while innerText returns the content of all elements,
except for <script> and <style> elements.  innerText will not return the text of elements that are hidden 
with css but textContent will*/

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = "logo Notation"
//  B- Using .setAttribute to change a few attributes
link2FirstCard.setAttribute('href', "https://th.bing.com/th/id/AMMS_9f7b94ff932e59a4ebe7f76758e94f9c?pid=ImgDet&w=708&h=1064&rs=1") 

// 👉 5- Changing the styling of an element

//  A- By changing the class names on the element with the classList API
header.classList.add('orange')
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const helpLink = document.createElement('a')
helpLink.href ="#"
helpLink.textContent = 'Help'
document.querySelector('nav').appendChild(helpLink)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const copyCard = firstCard.cloneNode(true)
const cardGroup = document.querySelector(".card-group")
cardGroup.appendChild(copyCard)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
