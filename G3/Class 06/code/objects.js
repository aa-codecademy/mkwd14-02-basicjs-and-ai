//Literal notation
//we use curly brackets {}
let hotel = {
    name: "Continental",
    rooms: 100,
    bookedRooms: 50,
    hasGym: false,
    checkAvailability: function(){
        return this.rooms - this.bookedRooms; //with the keyword this we access the properties of our object
    }
}

console.log(hotel.name); //dot notation
console.log("How many rooms were booked? " + hotel.bookedRooms);

console.log(hotel.checkAvailability());

//Exercise 1
let student = {
    firstName: "Petko",
    lastName: "Petkovski",
    id: 1234,
    age: 25,
    email:"petkop@mail.com",
    canCode: true
};

console.log(`Hello ${student.firstName} ${student.lastName}!`);
student.lastName = "Petkovski2";

//Constructor notation

let newObject = new Object();
console.log(newObject);
//we use the dot notation to add new properties/methods or to change their values
newObject.newProperty = "new property";
console.log(newObject);

newObject.newMethod = function(){
    console.log("I am an object method");
}

newObject.newMethod(); //calling the method of our newObject object

//updating an object
console.log(newObject.newProperty);
newObject.newProperty = "updated new property";
console.log(newObject.newProperty);

//deleting a property from an object
console.log(newObject);
delete newObject.newProperty;
console.log(newObject);


//Exercise 2
student.firstName = "Elena";
student.lastName = "Georgievska";
console.log(student);

//Exercise 3
let trainer = {
    name: "Stefan",
    lastName: "Stefanovski",
    academy: "Avenga Academy",
    lecture: "objects"
}

delete trainer.lecture;
console.log(trainer);

trainer.age = 30;
console.log(trainer);

trainer.getFullName = function(){
    return `${this.name} ${this.lastName}`; //this points to the object that we are working with -> our trainer
}

console.log(trainer.getFullName());

//Constructor function
function Hotel(hotelName, rooms, booked){
    //this.name points to the property of the object that we are creating -> the hotelName param value will be the value of the property name of the object that we are creating
  this.name = hotelName;
  this.rooms = rooms;
  this.bookedRooms = booked;
}

//when creating the object we use the new keyword and the name of the constructor function and we send the values of the properties as params
let hotelContinental = new Hotel("Continental", 100, 50);
console.log(hotelContinental);

let hotelTino = new Hotel("Tino", 80, 20);
console.log(hotelTino);


//This keyword - this always point to the object that we are currently working with (if it is not an object that we created, then it probably points too the window object)

alert("Hello from window");

//here, this is accessing the global object - window and its properties and methods
//for the global window object we don't need to use this nor use the window (name of the object)
this.alert("Hello from window"); //here this keyword is actually pointing to the window obj
window.alert("Hello from window");

alert("It automatically searches the window object for a method with a name alert");

let rectangle = {
    width: 500,
    height: 500,
    getArea: function(){
        return this.width * this.height; //here this keyword is accessing the current obj that we are working with - the width and height of the rectangle
    }
}

console.log(rectangle.getArea());


//this is a function in the global scope (it is not a part of our object, but it is a part of the window)
function windowSize() {
	let width= this.innerWidth; //here the this keyword points to the window object
	let height = this.innerHeight;
	return [height, width];
}