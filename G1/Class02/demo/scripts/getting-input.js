let input = prompt('Please enter a number');
console.log(input);
console.log(typeof input);

let parsedInput = parseInt(input);
console.log(parsedInput);
console.log(typeof parsedInput);

if (!Number.isNaN(parsedInput)) {
    if (parsedInput % 2 === 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
} else {
    console.log('Please enter valid number');
}

if (Number.isNaN(parsedInput)) {
    console.log('Please enter valid number');
} else {
    if (parsedInput % 2 === 0) {
        console.log('The number is even');
    } else {
        console.log('The number is odd');
    }
}

