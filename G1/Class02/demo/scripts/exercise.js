// Decription: Using prompt() 
// display a dialog box that prompts the visitor for input. 
// Will return null on 'Cancel' or the value provided on 'Ok'
// Action: Ask the user how much money he has, 
// and depending on the value, suggest to him what he should do

let input = prompt('How much money do you have?');

if (!input) {
    console.log('Please enter valid number');
} else {
    let parsedInput = parseInt(input);

    if (Number.isNaN(parsedInput)) {
        console.log('Number is not valid');
    } else {
        if (parsedInput >= 100) {
            console.log('first');
        } else if (parsedInput >= 80) {
            console.log('second');
        } else if (parsedInput >= 50) {
            console.log('third');
        } else if (parsedInput >= 20) {
            console.log('fourth');
        } else {
            console.log('end');
        }
    }
}
