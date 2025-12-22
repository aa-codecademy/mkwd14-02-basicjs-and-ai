//Generate a simple JavaScript program that does the following.
//1. Ask the user to input the radius of a circle using prompt().
//2. Convert the input value from a string to a number using parseInt().
//3. Calculate the area of the circle using the formula area = π * radius^2.
//4. Print the result in the console using console.log().

// Step 1: Ask the user to input the radius of a circle
let radiusInput = prompt("Please enter the radius of the circle:");
// Step 2: Convert the input value from a string to a number
let radius = parseInt(radiusInput);
// Step 3: Calculate the area of the circle
let area = Math.PI * Math.pow(radius, 2); //another way we could have done is to tell copilot to use pi = 3.14 and caluclate area = pi * radius * radius
// Step 4: Print the result in the console
console.log("The area of the circle is: " + area);