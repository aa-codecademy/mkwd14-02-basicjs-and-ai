let mainTitle = document.getElementById("main-title");
//let description = document.getElementsByClassName("description");
let description = document.querySelector(".description");

//textContent
console.log(mainTitle.textContent);

//Text content changes only the text content
//we can change the text content of an element and add a new value or additional text by accessing it and assigning it a new value
mainTitle.textContent = "New text content for main title";
console.log(mainTitle.textContent);
mainTitle.textContent += " - updated dynimacially in our js file";

//Inner html - we can add html code via js
let footer= document.getElementsByTagName("footer")[0];
console.log(footer);

footer.innerHTML = `<p> G3 JS 2026 </p> 
    <p>We are learning about DOM </p>`;
    console.log(footer);

//if we use textContent and write html - the html will not be proccessed and it will be looked at as text
//footer.textContent = "<p>Hello </p>"
footer.innerHTML = "<p>Hello </p>";

let movies = ["Harry Potter", "Lord of the rings", "James Bond"];

let moviesContainer = document.getElementById("movies-container");
function renderMovies(movies){
    let html = "<ul>";
    for(let movie of movies){
        html+= `<li>${movie}</li>`
    }
    html += "</ul>"
    console.log(html);
    moviesContainer.innerHTML = html;
}

renderMovies(movies);


//Working with attributes
let footerText = footer.querySelector("p");
footerText.setAttribute("title", "Dynamic footer title");
console.log(footer);
console.log(footerText.getAttribute("title"));

//Chaning the style of an element
let styleText = document.getElementById("style-text");
styleText.style.color = "blue";
