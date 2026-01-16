const starWarsApiFilms = fetch("https://swapi.info/api/films")
  .then((response) => response.json())
  .then((filmsData) => {
    // for (const film of filmsData) {
    //   mainDiv.innerHTML += `<h2>${film.title}</h2>`;
    // }
  });

const starWarsPeopleFilms = fetch("https://swapi.info/api/people")
  .then((response) => response.json())
  .then((peopleData) => {
    // for (const film of filmsData) {
    //   mainDiv.innerHTML += `<h2>${film.title}</h2>`;
    // }
  });

// const rootUrl = "https://swapi.info/api/";

// console.log(starWarsApiFilms);
const mainDiv = document.getElementById("mainDiv");
const personDataCardsContainerDiv = document.getElementById(
  "personDataCardsContainer"
);

async function getStarWarsApiData(urlDestination) {
  const response = await fetch(`https://swapi.info/api/${urlDestination}`);
  const data = await response.json();
  return data;
}

async function init() {
  const filmsData = await getStarWarsApiData("films");
  const peopleData = await getStarWarsApiData("people");
  const planetsData = await getStarWarsApiData("species");
  const vehiclesData = await getStarWarsApiData("vehicles");
  for (const film of filmsData) {
    mainDiv.innerHTML += `<h2>${film.title}</h2>`;
  }

  for (const person of peopleData) {
    personDataCardsContainerDiv.innerHTML += `
        <div class="person-card" style="background-color: #${getRandomCssHexColor()}">
        <h3>${person.name}</h3>
            <p>Height: ${person.height} cm</p>
            <p>Mass: ${person.mass} kg</p>
            <p>Hair Color: ${person.hair_color}</p>
        </div>
    `;
  }
}

function getRandomCssHexColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

init();

//JSON
// JavaScript Object Notation
//Used to transmit data between a server and web application
// Basically a string representation of an object
const exampleJsonString = `{"name": "Luke Skywalker", "height": 172, "mass": 77 }`;

console.log(exampleJsonString);
const parsedString = JSON.parse(exampleJsonString);
console.log(parsedString);

const nekakovObjekt = {
  name: "Darth Vader",
  height: 202,
  mass: 136,
};
console.log(nekakovObjekt);
const stringifiedObject = JSON.stringify(nekakovObjekt);
console.log(stringifiedObject);



