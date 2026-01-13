console.log(document); //logs the entire document (the html)

//we can access everything we keep in the document (access the html via the document object)
console.log(document.URL);

//Accessing elements by ID
let firstparagraph = document.getElementById("first-paragraph");
console.log(firstparagraph); //the whole node for the paragraph

//Accessing elements by className
//It always returns an array of elements
let domExplanationDivs = document.getElementsByClassName("dom-explanation");
console.log(domExplanationDivs);

//if we want to access a specific element from the return array we need to use index
console.log(domExplanationDivs[0]);

//Accessing elements by tag name
//It always returns an array of elements
let allPargraphs = document.getElementsByTagName("p");
console.log(allPargraphs);
console.log(allPargraphs[1]); //second-paragraph

//Accessing element by class name by using query selector
//'Query selectors always returns the first element that matches the given selector (it does not return all elements that match the given selector)
let domExplanationDivByQuerySelector = document.querySelector(".dom-explanation"); //we use the . to access the class (use the class selector)
console.log(domExplanationDivByQuerySelector); //the first element that has this class

//we use querySelectorAll to access multiple elements that match the given query selector
let listItems = document.querySelectorAll("#node-types li"); //all li that are inside an element with id node-types
console.log(listItems);

//Travesing the DOMtree
//Accessing the parent element
let secondParagraph = document.getElementById("second-paragraph");
let parentDiv = secondParagraph.parentElement;
console.log(parentDiv);

//Accessing the sibling elements
//nextSibling - returns the whole node
//nextElementSibling - returns just the element
let nextElementSibling = secondParagraph.nextElementSibling;
console.log(nextElementSibling);
let previousElementSibling = secondParagraph.previousElementSibling;
console.log(previousElementSibling);

let nextSibling = secondParagraph.nextSibling;
console.log(nextSibling);

let previousSibling = secondParagraph.previousSibling;
console.log(previousSibling);

//Accessing children of an element
let listTypes = document.getElementById("node-types");
let childrenOfList =  listTypes.children;
console.log(childrenOfList); //array of items

//if we want to access a specific child we use index
console.log(childrenOfList[0]);

//last child
let lastChild = listTypes.lastElementChild;
console.log(lastChild);
