let helloGreeting = "Hello"; //double quotes
let academy = 'Avegna'; //single quotes

console.log("Hello" + " " + 'Avenga'); //concatenation

//it will take the values from the variables
console.log(helloGreeting + " " + academy); //concatenation with variables

let greeting = helloGreeting + " " + academy; //storing concatenated value in a variable
console.log(greeting); //printing the variable

let num = 5;
let message = "test";
let result = num + message; //concatenation = one of the operands is a string
console.log(result); //prints 5test

let num1 = 5; //number
let num2 = 10; //number
let sum = num1 + num2; //addition = both operands are numbers
console.log(sum); //prints 15 = both operands are numbers

let firstNum = "5"; //string
let secondNum = 10; //number
let sum2 = firstNum + secondNum; //concatenation = one of the operands is a string
console.log(sum2); //prints 510 = one of the operands is a string

//Interpolation
//let groupName = prompt("Enter group name: "); //taking input from user
let groupName = "G3";
let welcomeMessage = `Welcome to ${groupName} group!`; //using backticks and ${} for interpolation
let concatenated = "Welome to " + groupName + " group!"; //using concatenation
console.log(welcomeMessage); //printing the interpolated message
console.log(concatenated); //printing the concatenated message

let firstName = "Marko";
let age = 2;
let info = `My name is ${firstName} and I am ${age} years old.`; //interpolation
console.log(info); //printing the interpolated message

//Quotes
let secondMessage = "It's really nice to be a web developer."; //using double quotes to avoid conflict with single quote in contraction
//let wrongSecondMessage = 'It's really nice to be a web developer.'; //this will cause an error due to conflict between single quotes
console.log(secondMessage); //printing the message
let thirdMessage = 'It is really "nice" to be a web developer.'; //using single quotes to avoid conflict with double quotes in the message

let anotherMessage = "It is really \"nice\" to be a web developer."; //using escape character \ to include double quotes within double quotes
console.log(thirdMessage); //printing the message

let twoLineMessage ="This is the first line. \nThis is the second line."; //using \n for new line
console.log(twoLineMessage); //printing the message


//Non-value values
let a; //undefined
console.log(a); //prints undefined
let b = null; //null
console.log(b); //prints null