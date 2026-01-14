// console.log(document);

// Selecting by Id
let myHeader = document.getElementById('myTitle');
// console.log(myHeader);
// console.log(myHeader.innerText);

// Selecting by Class

let paragraphs = document.getElementsByClassName('myParagraph');
// console.log(paragraphs);
let secondParagraph = document.getElementsByClassName('second');
// console.log(secondParagraph);

// Selecting by Tag Name
let paragraphs1 = document.getElementsByTagName('p');
// console.log(paragraphs1);
let texts = document.getElementsByTagName('text');
// console.log(texts);

// Query Selectors
let paragraphs2 = document.querySelectorAll('p');
// console.log(paragraphs2);
let firstP = document.querySelector('.myParagraph');
let firstPa = document.querySelectorAll('.myParagraph');
// console.log(firstP);
// console.log(firstP);

let main = document.querySelector('#main');
// console.log(main);

// Finding sibling elements

let pTag = document.querySelector('.myParagraph');
let pTaag = document.getElementsByClassName('myParagraph')[0];

let nextSibling = pTag.nextElementSibling;
// console.log(nextSibling);
let prevSibling = pTag.previousElementSibling;
// console.log(prevSibling);

//Finding the parent element
let pTag1 = document.querySelector('.myParagraph');
let parent = pTag1.parentElement;

// console.log(parent);

// Finding child elements

let mainDiv = document.querySelector('#main');

let children = mainDiv.children;
// console.log(children);

let fChild = mainDiv.firstElementChild; 
let lChild = mainDiv.lastElementChild; 
// console.log(fChild);
// console.log(lChild);

let pTagMyParagraph = mainDiv
            .firstElementChild
            .nextElementSibling
            .parentElement
            .firstElementChild;

console.log(pTagMyParagraph);
// Selecting thru a selected element
let a = mainDiv.querySelector('p');