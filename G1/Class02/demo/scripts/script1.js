let a = 2 / 'test';
console.log(a);
console.log(typeof a);

let b = 10;
let c = 'Trajan';

let result = b / c;
console.log('Result is: ' + result);

console.log(result == NaN);
console.log(result === NaN);

let d = isNaN(result);
console.log('Using isNaN result is: ' + d);

let text = 'Hello';
console.log('Text: ' + isNaN(text));
console.log('--- Number.isNaN() ---')
console.log('Using isNaN result is: ' + Number.isNaN(result));
console.log('Text: ' + Number.isNaN(text));

let e = Infinity;
let f = -Infinity;
console.log('Value of e is ' + e);
