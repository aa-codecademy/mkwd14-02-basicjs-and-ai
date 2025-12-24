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
    if(num1 === 1) {

    }
}

let result = sumV3(a, b);
console.log(result);

