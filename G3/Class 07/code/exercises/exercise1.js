let firstDiv = document.getElementById("first");
let paragraphs = document.getElementsByTagName("p");
//let lastDiv = document.getElementsByTagName("div")[2];
let lastDiv = document.getElementsByTagName("body")[0].lastElementChild; //we might not know the index of the last div
let header3InLastDiv = lastDiv.getElementsByTagName("h3")[0];
let h1InLastDiv = header3InLastDiv.previousElementSibling;
//let paragraphSecondDivText = document.getElementsByClassName("anotherDiv")[0].firstElementChild.textContent;
let secondParagraph = document.getElementsByClassName("second")[0].textContent;
//let secondParagraph = document.getElementsByClassName("paragraph")[1].textContent;

document.querySelector("text").textContent += " text";
h1InLastDiv.textContent = "New text content for H1";
header3InLastDiv.textContent = "New text contetn for H3";