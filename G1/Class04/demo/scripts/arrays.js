let arr = [];
// console.log(typeof arr);

let daysOfWeek1 = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

// let mixedArr = [null, undefined, true, 
//     false, 'Trajan', 54, [54, 'Bob', true, [{}, [], null]], {}, function test() {}];
// console.log(mixedArr);


let daysOfWeek = [
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday', 
    'Sunday'
];

let dayOne = daysOfWeek[0];
console.log(dayOne);
let sunday = daysOfWeek[6];
console.log(sunday);
let lastElement = daysOfWeek[daysOfWeek.length - 1];
console.log(lastElement);

// get value
let a = daysOfWeek[3];
// set value
daysOfWeek[3] = 'Weekend';
console.log(daysOfWeek);

// adding items

// n = dolzinata na nizata 0 -> n-1
daysOfWeek[daysOfWeek.length] = 'New value';

// add single element
daysOfWeek.push('new value added with push');
//add multiple elenments
daysOfWeek.push('first', 'second', 'third');