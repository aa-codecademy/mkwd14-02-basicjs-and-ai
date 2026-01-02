
// while(expression) { // expresion should evaluate in false in some point
//     // block of code
// }

// let counter = 0;
// while(counter <= 10) {
//     console.log(counter);

//     counter += 1;
// }

let daysOfWeek = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

// let index = 0;
// while(index < daysOfWeek.length) {
//     console.log(daysOfWeek[index]);

//     index += 1;
// }


// Do-while

// do {
//     // block of code
// } while(expresion)

let j = 0;
do {
    console.log('Runing without check');
} while(j !== 0);

while(j !== 0) {
    console.log('Runing with check');
}


// FOR

let i = 0; // initialization of couter
while(i < 10) { // condition

    i += 1; //increment/decrement
} 

// (initialization of couter; condition; increment/decrement)
// for(let j = 0; j < 10; j += 1) {
//     console.log(j);
// }


for(let j = 0; j < daysOfWeek.length; j++) {
    let element = daysOfWeek[j];
    console.log(element);
}