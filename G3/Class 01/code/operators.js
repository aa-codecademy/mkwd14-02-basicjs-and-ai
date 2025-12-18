let a = 2;
let b = 5;

let sum = a + b;
console.log("sum"); //prints out "sum" - the string that we typed in
console.log(sum); //prints out the value of the variable sum
console.log("a:");
console.log(a);
console.log("b:");
console.log(b);
console.log("a+b:");
console.log(a+b);
sum += 3; //sum = sum + 3

console.log("The value of a is " + a); //concatenation

let resultDivision = b / a;
let resultModule = b % a;

console.log("B divided by a is " + resultDivision);
console.log("B module a is "+ resultModule);

let c = 8;
console.log("c before:");
console.log(c);
c--; //this changes the value of c as if we wrote c = c-1
console.log("c after:");
console.log(c);

let num = 5;
console.log("num before:");
console.log(num);
num += 2; //this changes the value of num as if we wrote num = num + 2
console.log("num after:");
console.log(num);

let result = a == b; //comparison
console.log("result");
console.log(result); //false
console.log("Type of result:");
console.log(typeof(result));

// = is used to assign a value to a variable
// == compares the values of the variables
// === compares the value and the type of the variables

let number = 95; //type - number
let stringNumber = "95"; //type - string
console.log("Type of number " + typeof(number));
console.log("Type of stringNumber " + typeof(stringNumber));

let firstComparison = number == stringNumber // by value - true
console.log(firstComparison); //true

let secondComparison = number === stringNumber; //by value and type - false (different type - number and string)
console.log(secondComparison); //false