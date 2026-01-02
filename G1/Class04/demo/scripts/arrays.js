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
// daysOfWeek[daysOfWeek.length] = 'New value';

// add single element at the eend
// daysOfWeek.push('new value added with push');
//add multiple elenments at the end
// daysOfWeek.push('first', 'second', 'third');

//add single elenment at the start
// daysOfWeek.unshift(12345);
//add mulitple elenment at the start
// daysOfWeek.unshift(1, 2, 3, 4, 5);


// remove elements from end
// let lastValue = daysOfWeek.pop();
// daysOfWeek.pop();
// console.log(lastValue);

// remove element from start
// let firstElement = daysOfWeek.shift();
// console.log(firstElement);

let newArr = new Array();
console.log(newArr);