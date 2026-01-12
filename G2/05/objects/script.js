import Car from "./src/models/Car.js";

const myCar = new Car("Toyota", "Corolla", 2020, "White");
const andrejsCar = new Car("Bugatti", "Chiron", 2022, "Blue");
const anetasCar = new Car("Kia", "Ceed", 2018, "Black");
const blazesCar = new Car("BMW", "X5", 2019, "Red");
const ivansCar = new Car("Smart", "ForTwo", 2021, "Silver");

console.log(myCar);
console.log(andrejsCar);
console.log(anetasCar);
console.log(blazesCar);
console.log(ivansCar);

myCar.refuel();
myCar.startEngine();

andrejsCar.refuel();
anetasCar.repaint("White");
blazesCar.stopEngine();
ivansCar.startEngine();
myCar.startEngine();
ivansCar.stopEngine();

// make a class named House that will have 4 properties: address,
// size (in square meters), number of rooms, and color.
// add method paint(newColor) that will change the color of the house to newColor.
// add method upgrade(newSize) that will change the size of the house to newSize.
// create 3 intances of the House class and demonstrate the usage of the paint and upgrade methods.

let someTimeout = setTimeout(() => {
  console.log("This timeout happens after 5 seconds");
}, 5000);

let someInterval = setInterval(() => {
  console.log("This interval runs every 3 seconds");
}, 3000); // runs every 3 seconds
