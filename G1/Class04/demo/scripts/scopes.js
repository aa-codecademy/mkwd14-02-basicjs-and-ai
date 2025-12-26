
// Global scope 
function myFnc() {
    // myFnc function scope

    function myFnc1() {
        // myFnc1 function scope
    }

    if (expression) {
        // if socpe
    }

}

// function scope
function simpleFnc() {
    let number = 10;
    console.log(number);
}

// simpleFnc();
// console.log(number);

// global scope
let str = 'Somestring';
function simpleFnc1() {
    let str = 'Some other string';
    console.log(str);
}

// simpleFnc1();
// console.log(str);

let globalVar = 500;
function simpleFnc2() {
    globalVar = 600;
    console.log(globalVar);
}

simpleFnc2();
console.log(globalVar);


let num = 5;
let isEven = false; 

if (num % 2 === 0) {
    isEven = true;
} else {
    isEven = false;
}


function simpleFnc3() {
    a = 50;
}

simpleFnc3();
console.log(a);


let message = "Outside the function";
function warning(message){
    console.log(message);
}

warning("Inside the function");
console.log(message);

let global = 1234;
function simpleFnc4() {
    console.log('First scope', global);
    function simpleFnc5() {
        console.log('Second scope', global);

        if (global === 1234) {
            console.log('if scope', global);
            global = 4321;
            console.log('after value change', global);
        }

    }
    simpleFnc5();

}

// simpleFnc4();

// How to get the date and time
// let date = new Date();
// date.getFullYear();

function calculateAge(birthYear, 
    currentYear = new Date().getFullYear()) {
    return currentYear - birthYear;
}

console.log(calculateAge(2000, 2011));
console.log(calculateAge(1987));
console.log(calculateAge(1987, 2010));

