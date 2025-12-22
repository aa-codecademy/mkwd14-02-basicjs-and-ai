// we use the keyword function to declare a function - DECLARATION
//sayHello is the name of the function
function sayHello(){
    // inside the curly braces is the function body
    console.log("Hello, world!");
} //this function will not be executed until it is called

//calling the function - we usethe function name
sayHello(); // this will print "Hello, world!" to the console

// Function with parameters
function addNumbers(a, b){
    console.log(a + b);
}

addNumbers(5, 10); // this will print 15 to the console
addNumbers(20, 30); // this will print 50 to the console
addNumbers(-5, 5); // this will print 0 to the console

//studentName is a paramater - that is a placeholder for a value that will be passed to the function when it is called
function greetStudent(studentName){
    console.log(`Hello ${studentName}, welcome to the class!`);
}

greetStudent("Oleg");
greetStudent("Gabriela");
greetStudent("Elena");


//returning a value from a function
function multiplyNumbers(x, y){
    return x * y; // the return keyword is used to return a value from a function
}

multiplyNumbers(4, 5); //nothing happens - the function is called, and it is executed, and it returns a value, but that value is never used
let result = multiplyNumbers(4, 5); // now the returned value is stored in the variable result
console.log(result); // this will print 20 to the console
let result2 = result / 2;
console.log(result2); // this will print 10 to the console
let result3 = multiplyNumbers(result, 2);
console.log(result3); // this will print 40 to the console


function sayHelloToStudent(studentName){
    return `Hello ${studentName}, welcome to the class!`;
    console.log("This line will never be executed"); // this line will never be executed because it is after the return statement
}

let resultHello = sayHelloToStudent("Marco");
console.log(resultHello); // this will print "Hello Marco, welcome to the class!" to the console

function getNumberStats(number) {
    //inside the body of a function we can write any valid JavaScript code
    if (number === 0) {
        return "The number is zero";
    } else if (number > 0) {
        return "The number is positive";
    }
    else {
        return "The number is negative";
    }
}

let zeroStats = getNumberStats(0);
console.log(zeroStats); // this will print "The number is zero"
let positiveStats = getNumberStats(25);
console.log(positiveStats); // this will print "The number is positive"
let negativeStats = getNumberStats(-10);
console.log(negativeStats); // this will print "The number is negative"

function getNumberStatsSecondWay(number){
    //inside the body of a function we can write any valid JavaScript code
    if(number === 0){
        //if it reaches this point, we know the number is zero - it will return and end the function
        return "The number is zero";
    }
    if(number > 0){
        //if it reaches this point, we know the number is positive - it will return and end the function
        return "The number is positive";
    }

    // if we reach this point, the number must be negative
    return "The number is negative";
}


function printNumberStats(number) {
    //inside the body of a function we can write any valid JavaScript code
    if (number === 0) {
        console.log("The number is zero");
    } else if (number > 0) {
        console.log("The number is positive");
    }
    else {
        console.log("The number is negative");
    }
}

printNumberStats(0); 


//Parameter mismatch
//parameters are the placeholders defined in the function declaration
function logNumbers(num1, num2, num3){
    console.log( num1 + ", " + num2 + ", " + num3);
}

//argumenrts are the values passed to the function when it is called
//calling the function with more arguments than parameters
logNumbers(1,2,3); // -> expects three parameters, three arguments passed
logNumbers(1,2,3,4,5); // -> expects three parameters, five arguments passed - extra arguments are ignored
logNumbers(1); // -> expects three parameters, one argument passed - missing parameters are undefined
logNumbers(); // -> expects three parameters, no arguments passed - all parameters are undefined


function logData(data1, data2, data3 = "Default Value"){
    console.log( data1 + ", " + data2 + ", " + data3);
}
logData("A", "B", "C"); // -> all three parameters provided
logData(); // -> no parameters provided, all use default value
logData("A", "B"); // -> only first two parameters provided, third uses default value

console.log("=======Bulid-in fnctions in JS=========");
//debugger
console.log(); // built-in function to print a blank line in the console
prompt("Please enter your name: "); // built-in function to get user input
alert("This is an alert message!"); // built-in function to show an alert dialog
parseInt("123"); // built-in function to convert a string to an integer (whole number)
parseFloat("12.34"); // built-in function to convert a string to a floating-point number (decimal number)
isNaN("Hello"); // built-in function to check if a value is NaN (Not-a-Number)
Number("123"); // built-in function to convert a value to a number
String(123); // built-in function to convert a value to a string
Boolean(1); // built-in function to convert a value to a boolean (true or false)