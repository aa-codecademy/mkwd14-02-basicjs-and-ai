// arrow fnc
//let greetArrow = () => console.log('Hello g1');

// standard template

// definiton of a function
function greet() {
    console.log('Hello g1');
}

// call of a function
// greet();

// this is not the way to call a function
// let a = greet;
// console.log(a);

function printMessage(message) {
    console.log(message);
}

// printMessage('Hello from Avenga Academy!');

// let message = 'Hello AA from g1';
// printMessage(message);
// debugger;
// let input = prompt('Enter message');
// printMessage(input);


function sum(num1, num2) {
    let result = num1 + num2;
    console.log(result);
}

let a = 10;
let b = 15;

sum(a, b);
sum(7, 7);

function sumv2(num1, num2, num3, num4, num5) {
    let result = num1 + num2 + num3 + num4 + num5;
    console.log(result);
}

sumv2(1, 2, 3, 4, 5);


function sumV3(num1, num2) {
    let result = num1 + num2;
    return result;

    // with return the function ends
    if (num1 === 1) {

    }
}

let result = sumV3(a, b);
console.log(result);



function getFullName(firstName, lastName) {
    if (firstName && lastName) {
        return firstName + ' ' + lastName;
    }
    return 'N/A';
}

// let fullName = getFullName('Trajan', 'Stevkovski');
// console.log(fullName);
// let fullName1 = getFullName('', '');
// console.log(fullName1);



function getDayByNumber(day) {
    switch (day) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';
        default:
            return 'Not a valid day';
    }
}

// console.log(getDayByNumber(2));



// Parameter mismatch

function calculateLoan(amount, months, interest, name) {
    console.log(amount);
    console.log(months);
    console.log(interest);
    console.log(name);
    //lots and lots of code
}

// calculateLoan(1000, 12, 7, "John Doe");     // correct
// calculateLoan(1000, 12, 7, "John Doe", "Extra"); // extras are ignored
// calculateLoan(1000, 12);   // missing arguments become undefined



function logDataInConsole(data, type = 'info', color = 'blue') {
    console.log(`${type} ${color}: ${data}`);
}

logDataInConsole('Hello world');
logDataInConsole('Hello AA', 'warning', 'red');
logDataInConsole('Outside is raining', 'error');


// let num = Number('123213');
// let str = String(123123123);


function sumNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtractNumbers(num1, num2) {
    let result = num1 - num2;
    return result;
}

function multiplyNumbers(num1, num2) {
    let result = num1 * num2;
    return result;
}

function divideNumbers(num1, num2) {
    let result = num1 / num2;
    return result;
}

function modulNumbers(num1, num2) {
    return num1 % num2;
}


function simpleCalculator(num1, num2, operator) {
    let result = 0;
    switch(operator){
        case '+':
            result = sumNumbers(num1, num2);
            break;
        case '-':
            result = subtractNumbers(num1, num2);
            break;
        case '*':
            result = multiplyNumbers(num1, num2);
            break;
        case '/':
            result = divideNumbers(num1, num2);
            break;
        case '%':
            result = modulNumbers(num1, num2);
            break;
        default:
            result -Infinity;
            break;
    }
    return result;
}
// debugger;
// let result1 = simpleCalculator(5, 10, '-');
// logDataInConsole(result1, 'Result is');



function getNumberFromPrompt(message) {
    let input = prompt(message);
    let parsedInput = parseInt(input);
    if(isValidNumber(parsedInput)) {
        return parsedInput;
    }    
    return null;
}

function isValidNumber(number) {
    if(Number.isNaN(number)) {
       return false; 
    }
    return true;

    //return !Number.isNaN(number);
}

function isValidOperator(operator) {
    switch(operator){
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

let firstNumber = getNumberFromPrompt('Enter first number');
let secondNumber = getNumberFromPrompt('Enter second number');

if(firstNumber && secondNumber) {
    let operator = prompt('Inser + - * / as operator');
    if (isValidOperator(operator)) {
        let result = simpleCalculator(firstNumber, secondNumber, operator);
        logDataInConsole(result, 'Result is', ' :');
    }
}

// 
function simpleCalculator(num1, num2, operator) {
    let result = 0;
    switch(operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result -Infinity;
            break;
    }
    return result;
}

let a1 = prompt('')
let b1 = prompt('')
let parseA = parseInt(a1);
let parseB = parseInt(b1);
console.log(simpleCalculator(a1, b1, '+'));