function sum(number1, number2){
    return number1 + number2;
    // let result = number1 + number2;
    // return result;
}

let resultSum = sum(1,2);  
console.log(resultSum); // Output: 3

//write a function that subtracts two numbers
function subtract(number1, number2){
    return number1 - number2;
}
let resultSubtract = subtract(5,3);
console.log(resultSubtract); // Output: 2

//write a function that multiplies two numbers
function multiply(number1, number2){
    return number1 * number2;
}   
let resultMultiply = multiply(4,2);
console.log(resultMultiply); // Output: 8

//write a function that divides two numbers
function divide(number1, number2){
    return number1 / number2;
}
let resultDivide = divide(10,2);
console.log(resultDivide); // Output: 5


//combine all the operations in a single function
function calculate(number1, number2, operator){
    switch(operator){  
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
        case '%':
            return number1 % number2;
        default:
            return 'Invalid operator';
    }
}

console.log(calculate(6,3,'+')); // Output: 9
console.log(calculate(6,3,'-')); // Output: 3
console.log(calculate(6,3,'*')); // Output: 18
console.log(calculate(6,3,'/')); // Output: 2
console.log(calculate(6,4,'%')); // Output: 2

