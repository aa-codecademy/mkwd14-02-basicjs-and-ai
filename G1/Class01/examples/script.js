// alert('Hello G1, Welcome to javascript!');

// console.log('Hello G1, Welcome to javascript!');

// declare variable
let number;
// initialize variable
number = 5;
// Declaration and Initialization
let number1 = 5;

// let myNameIsTrajan using camelcase
// let _test

let Number2; // not the same
let number2;// not the same

// { 
//   let a = 1; // local variable   
// }




// string
let str = 'This is a string';
let str2 = "This is a string also";
let str3 = '2213123';

// numbers
let num = 1;
let num1 = 122783463478;
let num2 = -123123;

// boolean
let isValid = true;
let isValid1 = false;

// undefined
let variable;
let variable1 = undefined;
console.log(variable);
console.log(variable1);

// null
let students = null;
console.log(students);

let a = 'Trajan';
let typeOfVariable = typeof a;
console.log(typeOfVariable);

a = 10;
console.log(typeof a);


// this is a comment
// alert()

/* 
    let a = 4;
    let b = 10;
*/

// matematical operators
let b = 21;
let c = 5;
let sum = b + c;
// console.log(sum);

let substract = c - b;
// console.log(substract);

let multiply = b * c;
// console.log(multiply);

let divide = b / c;
// console.log(divide);

let modulus = b % c;
// console.log(modulus);

b++;
// console.log(b);
b = b + 1;
// console.log(b);
b += 1;
// console.log(b);

b--;
// console.log(b);
b = b - 1;
// console.log(b);
b -= 1;
// console.log(b);

// comparison operators

let first = 10;
let second = 20;
// console.log(first < second);
// console.log(first <= second);

// console.log(first > second);
// console.log(second >= first);

let name = 'Trajan';
let name1 = "Dragan";

// console.log(name == name1);
// console.log(name != name1);

// console.log(name == first);


// Write a JavaScript program to convert a length given 
// in feet to meters.
// TIP: 1 feet = 0.3048 meters

let metersPerFeet = 0.3048;
let feet = 100;
let meters = feet * metersPerFeet;
//console.log(meters);

// let abc = prompt('Enter number');
// console.log(typeof abc);

// Write JS program to calculate rectangle area: area = a * b

let firstSide = 10;
let secondSide = 5;

let area = firstSide * secondSide;
//console.log(area);



// Write a JavaScript program that will calculate 
// the area of a Circle
// TIP: area = π * r²

let pi = 3.14;
let r = 5;

let area1 = pi * (r * r);
console.log(area1);

let area2 = Math.PI * Math.pow(r, 2);
console.log(area2);
console.log(Math.pow(2, 4));

let bcd = 5;
let abcd = 'Trajan';
let str5 = bcd + abcd;
console.log(str5);

console.log('Avenga' + ' ' + 'Academy' + ' ' + 2025);

let withOutBackticks = 'Hello, my name is' + ' ' + abcd;
let backticks = `Hello, my name is ${abcd}`;
console.log(backticks); 

let url = 'www.google.com';
let urlWithParams = url + '/search' + '?' + 'id=' + 3 + '&' + 'name=Trajan';
let urlWithBackticks = `${url}/search?id=${a}&name=${b}`;