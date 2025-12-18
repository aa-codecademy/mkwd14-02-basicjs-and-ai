//Generate a JavaScript program that does the following.
//1. Ask the user to input the two sides of a rectangle using prompt().
//2. Convert the input values from strings to numbers.
//3. Calculate the area of the rectangle.
//4. Print the results in the console using console.log().

// Step 1: Ask the user to input the two sides of a rectangle
let sideA = prompt("Please enter the length of side A of the rectangle:");
let sideB = prompt("Please enter the length of side B of the rectangle:");
// Step 2: Convert the input values from strings to numbers
sideA = Number(sideA);
sideB = Number(sideB);
// Step 3: Calculate the area of the rectangle
let area = sideA * sideB;
// Step 4: Print the results in the console
console.log("The area of the rectangle is: " + area);
