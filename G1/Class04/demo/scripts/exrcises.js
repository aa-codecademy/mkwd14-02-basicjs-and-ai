// Write a JavaScript program to read ten array values, 
// determine the largest value, and print it


// let elements = [];

// let i = 0;

// while(i < 5) {
//     let input = prompt('Vnesi broj');
//     let parsedInput = parseInt(input);
//     elements.push(parsedInput);
//     i += 1;
// }
// console.log(elements);

// let largest = -Infinity;

// let counter = 0;
// while(counter < elements.length) {
//     let element = elements[counter];

//     if(element > largest) {
//         largest = element;
//     }
//     counter += 1;
// }

// console.log(largest);



// Write a JavaScript program to write 
// the sum of squares of the numbers from 101 to 150

// need one variable to be set to 0 for the sum
// need one counter to start from 101
// while counter <= 150
    // sum = sum + power of counter
    // couter should be incremented
// print sum


// Write a JavaScript program that will read 
// in a number and write out its digits


function digitsInNumber(number) {
    // this is with know bug
    while(Math.floor(number / 10) !== 0) {
        let digit = number % 10;
        console.log(digit);
        number = Math.floor(number / 10);
    }
}

// digitsInNumber(123456789);
// digitsInNumber(123122345345);
// digitsInNumber(3123123123456789);

