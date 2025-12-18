let result = 2 / "test";
console.log(result); // NaN

console.log("Type of result");
console.log(typeof(NaN)); // "number"

let result1 = isNaN(result); //if the result is a number or not
console.log(result1); // true - the result is not a number

let text = "text";
let resultText = isNaN(text);
console.log(resultText); // true - the text is not a number

let number = 7;
let resultNumber = isNaN(number);
console.log(resultNumber); // false - the number is a number

// Example of Infinity
let c = Infinity;
console.log(c); // Infinity
let d = -Infinity;
console.log(d); // -Infinity

let divideByZero = 7 / 0;
console.log(divideByZero); // Infinity
console.log(typeof(divideByZero)); // "number"
console.log(typeof(c));
console.log(typeof(d));