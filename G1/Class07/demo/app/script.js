let students = ["Bob Bobsky", "Jill Cool", "John Doe", "Jane Sky"];
let subjects = ["Math", "English", "Science", "Sport"];
let grades = ["A", "B", "A", "C"];

let myApp = document.getElementById('app');
let title = myApp.firstElementChild;
let content = title.nextElementSibling;

function printGrades(subjects, grades, element) {
    element.innerHTML = '';
    element.innerHTML += '<ul>';
    for(let i = 0; i < subjects.length; i++){
        element.innerHTML += `<li>${subjects[i]}: ${grades[i]}</li>`;
    }
    element.innerHTML += '</ul>';
}

function printStudents(students, element) {
    element.innerHTML = '';
    element.innerHTML += '<ol>';
    for(let student of students) {
        element.innerHTML += `<li>${student}</li>`;
    }
    element.innerHTML += '</ol>';
}

function acaemyPanel(role, name) {
    if (role === 'student') {
        title.innerHTML += `
            <h1>
                <b>
                    Hello there ${name}
                </b>
            </h1>
            <p>Welcome to your student page</p>
        `;
        content.innerHTML = '';
        content.innerHTML += '<h3>Your grades: </h3>';
        printGrades(subjects, grades, content);
    } else if(role === 'teacher') {
         title.innerHTML += `
            <h1>
                <b>
                    Hello there ${name}
                </b>
            </h1>
            <p>Welcome to your teachers page</p>
        `;
        content.innerHTML = '';
        content.innerHTML += '<h3>Your students: </h3>';
        printStudents(students, content);
    } else {
        title.innerHTML += '<h1><b>Your login was unsucessfull</b></h1>';
        title.innerHTML += '<p>Please try again!</p>';
    }
}


let role = prompt('Are you a student or teacher?');
let name = prompt('What is your name?');

acaemyPanel(role, name);