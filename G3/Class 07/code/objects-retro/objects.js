//Object literals

let personBob = {
    firstName: "Bob",
    lastName: "Bobsky",
    age: 40,
    city: "Skopje",
    printInfo: function(){
                             //Bob
        console.log(`Person ${this.firstName} ${this.lastName} has ${this.age}`);
    }
}

console.log(personBob.firstName);
personBob.printInfo();

window.console.log("Hello");

let firstName = "Trajko";
console.log(this.firstName); //Trajko
console.log(firstName); //Trajko


//Object
//we use the dot notation to add properties and methods
let personPetko = new Object();
personPetko.firstName = "Petko";
personPetko.lastName = "Petkovski";
personPetko.email = "p.petkovski@mail.com";

//Constructor function

function Person(firstName, lastName, age, city){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.printInfo= function(){
        console.log(`Person ${this.firstName} ${this.lastName} has ${this.age}`);
    }
}

let bob = new Person("Bob", "Bobsky", 40, "Skopje");
bob.printInfo();

let petko = new Person("Petko", "Petkovski", 30, "Ohrid");
petko.printInfo();
console.log(petko.firstName); //Petko
console.log(this.firstName); //same as console.log(window.firstName) - Trajko

//Example
let width = 600;
let shape = {
    width: 300,
    showWidth: function () {
        console.log(this.width); //here this has the value of shape (the current object that we work with) - 300
    }
};

function showWidth() {
	console.log(this.width); //here this represents the window object, so this.width will be the value of the width property - 600
}

shape.showWidth(); // 300

showWidth(); //600


//Loops

let persons = [bob, petko];

//while
let counter = 0;
while(counter < persons.length){
    persons[counter].printInfo();
    counter++;
}

//for
for(let i = 0; i < persons.length; i++){
    persons[i].printInfo();
}

//for-of
for(let person of persons){
    console.log(person);
}