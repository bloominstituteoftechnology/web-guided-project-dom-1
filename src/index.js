// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
// const header = document.getElementById('header')
// const header = document.getElementsByTagName('header')
const header = document.querySelector('header#header')
const logoTitle = document.querySelector('h1#logoTitle.heading.logo')
const firstCard = document.querySelector('.card:nth-of-type(1)')
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector('h2.card-title')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = header.querySelectorAll('nav a')
// console.log(links)
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent))
// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links)
// console.log(linksRealArray)
// D- Use .filter to find the anchor tag with the textContent of "About"
// const aboutNavItem = linksRealArray.filter(link => link.textContent === 'About')[0]
const aboutNavItem = linksRealArray.find(link => link.textContent === 'About')
console.log(aboutNavItem)


// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = 'Lambda Dog'
titleFirstCard.textContent = 'I rulez'
subtitleFirstCard.textContent = 'obviously'
textFirstCard.textContent = 'Doggo ipsum pupperino mlem very taste wow doing me a frighten I am bekom fat super chub heck big ol doggorino, puggorino blop you are doing me a frighten smol borking doggo with a long snoot for pats ruff very taste wow.'
link2FirstCard.textContent = 'Dog Ipsum'
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = 'heading logo banana'
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog')
link2FirstCard.setAttribute('href', 'https://doggoipsum.com')

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => {
    header.classList.toggle('sky')
}, 1000)
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em'


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group').appendChild(secondCard)

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
