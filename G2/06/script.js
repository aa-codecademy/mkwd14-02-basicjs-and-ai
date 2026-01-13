const myApp = document.getElementById("app");
const titleDiv = myApp.firstElementChild;
const contentDiv = myApp.children[1];

const students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
const subjects = ["Math", "English", "Science", "Sport"];
const otherSubjects = ["History", "Geography", "Art", "Music"];

const grades = ["A", "B", "A", "C"];
const otherGrades = ["B", "C", "A", "A"];

/**
 *
 * @param {string[]} subjects
 * @param {string[]} grades
 * @param {HTMLElement} element
 */
function printGrades(subjects, grades, element) {
  element.innerHTML = ""; // clearing element
  element.innerHTML += "<ul>";
  for (let i = 0; i < subjects.length; i++) {
    element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
  }
  element.innerHTML += "</ul>";
}

/**
 * @param {string[]} students
 * @param {HTMLElement} element
 */
function printStudents(students, element) {
  //   element.innerHTML = ""; // clearing element
  element.innerHTML += "<ol>";
  for (let student of students) {
    element.innerHTML += `<li>${student}</li>`;
  }
  element.innerHTML += "</ol>";
}

printGrades(subjects, grades, titleDiv);
printGrades(otherSubjects, otherGrades, contentDiv);

printStudents(students, contentDiv);

function academyPanel(role, name) {
  if (role === "student" && name.length >= 2) {
    // if its student and has name longer than 1 letter
    titleDiv.innerHTML += "<h1><b>Hello there " + name + "</b></h1>";
    titleDiv.innerHTML += "<p>Welcome to your student page</p>";
    contentDiv.innerHTML += "<h3>Your grades:</h3>";
    console.log(contentDiv);
    printGrades(subjects, grades, contentDiv);
  } else if (role === "teacher" && name.length >= 2) {
    titleDiv.innerHTML += `<h1><b>Hello ${name}!</b></h1>
    <p>Welcome to your teachers page</p>`;
    contentDiv.innerHTML += "<h3>Your students:</h3>";
    printStudents(students, contentDiv);
  } else {
    titleDiv.innerHTML += "<h1><b>Your login was unsucessfull</b></h1>";
    titleDiv.innerHTML += "<p>Please try again!</p>";
  }
}

const inputedRole = prompt("Are you a student or a teacher?");
const inputedName = prompt("What is your name?");
academyPanel(inputedRole, inputedName);

setTimeout(() => {
  titleDiv.style.display = "none";
}, 3000);
