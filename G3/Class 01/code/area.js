//a popup for entering input value will show up 
let a = prompt("Enter a value for side a"); // a is of type string - the input from the prompt is from type string
console.log(a);
console.log(typeof(a));

let b = prompt("Enter a value for side b"); // b is of type string - the input from the prompt is from type string
console.log(b);
console.log(typeof(b));

//we cannot multiply strings, we need numbers
let sideA = parseInt(a); //sideA is of type - number
console.log(typeof(sideA)); //number
console.log(typeof(a));//string

let sideB = parseInt(b);
console.log(typeof(sideB));//number

let area = sideA * sideB;
console.log(area);