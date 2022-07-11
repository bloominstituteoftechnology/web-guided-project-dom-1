// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
const allLinks = document.getElementsByTagName("a"); // HAS to be an HTML element
const allCards = document.getElementsByClassName("card");
const logoTitleOld = document.getElementById("logoTitle");
logoTitleOld.getElementsByClassName
//  Newer: querySelector, querySelectorAll
// querySelector returns the first (and only the first) element it finds
// that matches the given CSS selector

// querySelectorAll returns all elements that
// match the given CSS selector -> NodeList

// Wait, what is a DOM node anyways...?
// --> A portion of the DOM with all the capabilities of the DOM
// Document Object Model

//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
const logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)");

// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
const titleFirstCard = firstCard.querySelector("h2");
const subtitleFirstCard = firstCard.querySelector("h3");
const textFirstCard = firstCard.querySelector("p");
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll("nav a");
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));
/**
 * for (let i = 0; i < links.length; i++) {
 *   console.log(links[i].textContent);
 * }
 */
// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links);
// D- Use .find to find the anchor tag with the textContent of "Home"
const homeLink = linksRealArray.find(link => link.textContent === "Home");
// What is the difference between...
// ==   ::: does do type coercion => 1 == "1"
// ===  ::: does not do type coercion => 1 === "1" NOOO

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
