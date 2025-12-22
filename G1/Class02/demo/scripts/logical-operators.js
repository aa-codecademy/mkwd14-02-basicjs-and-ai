// AND

// console.log(true && true); // -> true
// console.log(true && false); // -> false
// console.log(false && (3 == 4)); // -> false

// console.log('Cat' && 'Dog'); // -> 'Dog'
// console.log(false && 'Cat'); // -> false
// console.log('Cat' && false); // -> false

// console.log('' && false); // -> ''

let a = true && true && true && true && false; // -> false
let b = false && true && true && true && true; // -> false

// console.log(true || true); // => true;
// console.log(false || true); // -> true;
// console.log(false || (3 == 4)); // -> false
// console.log('Cat' || 'Dog'); // -> 'Cat'
// console.log(false || 'Cat'); // -> 'Cat'
// console.log('' || false); // -> false

// Logical NOT (!)

// console.log(!true); // -> false
// console.log(!false); // -> true
// console.log(!'Cat'); // -> false
// console.log(!''); // -> true


let c = 10;
let d = '10';

// console.log(c == d);
// console.log(typeof c == 'number' && typeof d == 'number' && c == d);
// console.log(c === d);


let a1 = 41;
let a2 = '42';
let a3 = '43';

// console.log(a1 < a2); // -> true
// console.log(a2 < a3); // -> true


let b1 = 42;
let b2 = 'Trajan';

console.log(b1 < b2); // -> false
console.log(b1 > b2); // -> false
console.log(b1 == b2); // -> false
