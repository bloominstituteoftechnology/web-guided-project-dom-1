// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector("header");
let logoTitle = document.getElementsByTagName("h1");
logoTitle = document.getElementById("logoTitle");
logoTitle = document.querySelector("#logoTitle");
const firstCard = document.querySelector(".card:nth-of-type(1)");
// B- finding within one particular element
let imageFirstCard = firstCard.querySelector("img");
imageFirstCard = document.querySelector(".card img");
console.log(imageFirstCard);
const titleFirstCard = firstCard.querySelector(".card-title"); // ('h2')
const subtitleFirstCard = firstCard.querySelector("h3"); // ('h3')
const textFirstCard = firstCard.querySelector(".card-text"); //("h2")
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
console.log(link1FirstCard);
let link2FirstCard = textFirstCard.nextElementSibling.nextElementSibling;
link2FirstCard = link1FirstCard.nextElementSibling;
console.log(link2FirstCard);

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const anchorTags = document.querySelectorAll("nav a");
console.log(anchorTags);
// B- Loop over the links and console.log their text content
anchorTags.forEach((anchor) => console.log(anchor.textContent));
// C- Turn the collection of links into a real array
const realArrayOfAnchorTags = Array.from(anchorTags);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAnchor = realArrayOfAnchorTags.filter(
  (anchor) => anchor.textContent === "home"
);
console.log(homeAnchor);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Lambda Dog!";
subtitleFirstCard.textContent = "Its not a dog!";
//  B- Have the students research online the difference between textContent and innerText

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = "heading logo Banana";
//  B- Using .setAttribute to change a few attributes
link1FirstCard.setAttribute(
  "href",
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bBAdHie9rVifIiTHcTEr-gHaE8%26pid%3DApi&f=1"
);

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
setInterval(() => header.classList.toggle("sky"), 1000);
//  B- By manipulating inline styles on the element

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.href = "#";
blogLink.textContent = "Blog";

document.querySelector("nav").appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
const cardGroup = document.querySelector(".card-group");
cardGroup.appendChild(secondCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
