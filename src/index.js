// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

const mainNav = document.getElementById('mainNav');
const divTag = document.getElementsByTagName('div');
const cardClass = document.getElementsByClassName('card')

// console.log('id:', mainNav);
// console.log('tag', divTag);
// console.log('class', cardClass);

// A- finding across the entire DOM
const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.querySelectorAll('.card')[0]
// console.log('header:', header);
// console.log('logoTitle:', logoTitle)
// console.log('firstCard:', firstCard)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p');
// console.log('imageFirstCard:', imageFirstCard);
// console.log('titleFirstCard:', titleFirstCard);
// console.log('subtitleFirstCard:', subtitleFirstCard);
// console.log('textFirstCard:', textFirstCard);
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelectorAll('a')[0];
const link2FirstCard = firstCard.querySelectorAll('a')[1];
// console.log('link1FirstCard:', link1FirstCard);
// console.log('link2FirstCard:', link2FirstCard);

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const anchorTag = document.querySelectorAll('nav a');
// console.log(anchorTag);
// B- Loop over the links and console.log their text content
// anchorTag.forEach(value => console.log(value.textContent));

// C- Turn the collection of links into a real array
const anchorTagArr = Array.from(anchorTag)
// console.log(anchorTagArr);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeAnchor = anchorTagArr.filter(val => val.textContent === "Home");
// console.log(homeAnchor)

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
// document.querySelector('h1').textContent = 'Bloomtech Dog';
logoTitle.textContent = 'BloomTech Dogg';
titleFirstCard.textContent = 'Dog is great';
subtitleFirstCard.textContent = 'Nice Dog!'
link2FirstCard.textContent = 'Dog Ipsum';
textFirstCard.textContent = 'Doggo ipsum dat tungg tho puggorino doing me a frighten blep fluffer woofer, adorable doggo doggorino much ruin diet.'


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
link1FirstCard.href = 'https://unsplash.com/s/photos/dog-images';
link2FirstCard.href = 'https://doggoipsum.com/';
imageFirstCard.src = 'https://images.unsplash.com/photo-1591744454066-fcf125cf665f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZyUyMGltYWdlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
imageFirstCard.alt = 'Puppy picture';
logoTitle.className = 'heading logo banana'  // className will override existing 


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');  // classList will keep otherones with add or remove.
header.classList.remove('sky');
//  B- By manipulating inline styles on the element
header.style.fontSize = '1.5em';
setInterval(() => header.classList.toggle('sky'), 5000)

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.classList.add('menu-item');
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').append(secondCard);
header.remove();
document.body.prepend(header);


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]

const data = {
    'contact': {
        'contact-heading': 'Contact',
        'address': '123 Way Street Mesa, AZ 90210',
        'phone': '1-888-999-8888',
        'email': 'yourmail@mail.com'
    }
}

// const footer = document.querySelector('footer');
// footer.h4 = data['contact']['contact-heading'];
// footer.address = data['contact']['address'];
// footer.phone = data['contact']['phone'];
// footer.email = data['contact']['email']
// console.log(footer);

const footerContact = document.querySelector('.contact-heading');
const footerAdress = document.querySelector('.address');
const footerPhone = document.querySelector('.phone');
const footerEmail = document.querySelector('.email')
footerContact.textContent = data['contact']['contact-heading']
footerAdress.textContent = data['contact']['address'];
footerPhone.textContent = data['contact']['phone'];
footerEmail.textContent = data['contact']['email'];

// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]