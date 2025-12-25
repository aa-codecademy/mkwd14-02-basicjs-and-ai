// // import registerProfile from "./helpers/registerProfile.js";

// // // const userProfile = registerProfile();

// // // document.body.innerHTML += `<pre>${JSON.stringify(userProfile, null, 2)}</pre>`;

// function print(whatToPrint) {
//   document.body.innerHTML += `<p>${whatToPrint}</p>`;
// }

// // const printThisPrompt = prompt("What do you want to print?");
// // print(printThisPrompt);

// /**
//  * @param {number} a - first number to add
//  * @param {number} b - second number to add
//  * @returns {number} sum of a and b
//  */
// const add = (a, b) => a + b;

// /**
//  * Subtracts the second number from the first number.
//  *
//  * @param {number} a - The number from which to subtract.
//  * @param {number} b - The number to subtract.
//  * @returns {number} The result of a minus b.
//  */
// const subtract = (a, b) => a - b;

// /**
//  * Multiplies two numbers and returns the result.
//  *
//  * @param {number} a - The first number to multiply.
//  * @param {number} b - The second number to multiply.
//  * @returns {number} The product of a and b.
//  */
// const multiply = (a, b) => a * b;

// /**
//  * Divides two numbers and returns the result.
//  * Returns an error message if division by zero is attempted.
//  *
//  * @param {number} a - The dividend.
//  * @param {number} b - The divisor.
//  * @returns {number|string} The result of the division, or an error message if dividing by zero.
//  */
// const divide = (a, b) => {
//   if (b === 0) {
//     return "Error: Division by zero";
//   }
//   return a / b;
// };

// add(5, 3);

// subtract(10, 3);

// /**
//  * Greets a user with a customizable message.
//  *
//  * @param {string} name - The name of the user to greet.
//  * @param {string} greeting - The greeting message (default is "Hello").
//  * @returns {string} The complete greeting message.
//  */
// function greet(greeting = "Hello", name = "Guest") {
//   return `${greeting}, ${name}!`;
// }

// // Example usage:
// print(greet()); // "Hello, Guest!"
// print(greet(undefined, "Alice")); // "Hello, Alice!"
// print(greet("Welcome", "Bob")); // "Welcome, Bob!"

// let b = 10;
// let c;

// function someFunction() {
//   let a = 10;
//   console.log(b); //ova ke raboti

//   if (a > 5) {
//     c = 20;
//   }
// }

// let message = "Outside the function";
// function warning(message) {
//   console.log(message);
// }

// warning("Inside the function");
// console.log(message);

// function celsiusToFahrenheit(celsius) {
//   const num = Number(celsius);
//   if (isNaN(num)) {
//     return "Invalid input";
//   }
//   return (num * 9) / 5 + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   const num = Number(fahrenheit);
//   if (isNaN(num)) {
//     return "Invalid input";
//   }
//   return ((num - 32) * 5) / 9;
// }
// function kilometersToMiles(kilometers) {
//   const num = Number(kilometers);
//   if (isNaN(num)) {
//     return "Invalid input";
//   }
//   return num * 0.621371;
// }

// function milesToKilometers(miles) {
//   const num = Number(miles);
//   if (isNaN(num)) {
//     return "Invalid input";
//   }
//   return num / 0.621371;
// }

// // Example usage:
// console.log(`10 kilometers is ${kilometersToMiles(10)} miles`);
// console.log(`6.2 miles is ${milesToKilometers(6.2)} kilometers`);

// let inputCelsius = prompt("Enter temperature in Celsius:");
// let inputFahrenheit = prompt("Enter temperature in Fahrenheit:");

// console.log(`${inputCelsius}°C is ${celsiusToFahrenheit(inputCelsius)}°F`);
// console.log(
//   `${inputFahrenheit}°F is ${fahrenheitToCelsius(inputFahrenheit)}°C`
// );


/**
 * Calculates age based on birth year and current year.
 * @param {number} birthYear - The year of birth.
 * @param {number} currentYear - The current year.
 * @returns {string} The age message.
 */
function calculateAge(birthYear, currentYear) {
    const age = currentYear - birthYear;
    return `You are ${age} years old`;
}

// Example usage:
print(calculateAge(1990, 2025));
print(calculateAge(2000, 2025));
print(calculateAge(2010, 2025));

// Bonus: Get current year automatically
function calculateAgeAuto(birthYear) {
    const currentYear = new Date().getDate();
    const age = currentYear - birthYear;
    return `You are ${age} years old`;
}

console.log(typeof(5));

// Example usage with automatic current year:
print(calculateAgeAuto(1990));
print(calculateAgeAuto(2000));
print(calculateAgeAuto(2010));

let accountBalance = 500; // Hardcoded account balance

function atmWithdraw(amount) {
    if (amount > accountBalance) {
        return "Not enough money";
    }
    accountBalance -= amount;
    return `Withdrawn: $${amount}. Money left: $${accountBalance}`;
}

// Example usage:
print(atmWithdraw(100));
print(atmWithdraw(450));
print(atmWithdraw(10));

// Bonus: prompt version
// Uncomment below to use with prompt
// let withdrawAmount = Number(prompt("Enter amount to withdraw:"));
// print(atmWithdraw(withdrawAmount));