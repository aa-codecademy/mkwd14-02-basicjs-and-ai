//AND - all operands must be true for the result to be true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

//OR - at least one operand must be true for the result to be true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

//Negation - inverts the truthiness of the operand
console.log(!true);  // false
console.log(!false); // true

console.log("====Examples====");
let comp1 = 5 > 4; //true
let comp2 = 3 != 3; //false - this is a negation of == 
console.log(comp1 && comp2); // true && false -> false
console.log(comp1 || comp2); // true || false -> true

//this is a negation of ===
let comp3 = 5 !== "5"; //true - this is a negation of === and 5 is not equal by value and type to "5"
let expression = comp1 || comp2 || comp3; //true || false || true -> true
console.log(expression); // true

let negationCat = !"Cat"; //negation of truthy value -> false
console.log(negationCat); // false

let doubleNegationCat = !!"Cat"; //double negation of truthy value -> true

//TRUTHY/FALSY VALUES
console.log(true && true);   // true
console.log(false && (3 == 4));
console.log("Cat" && "Dog"); //Dog - it returns the value thet detrmines the result
console.log(0 && "Dog"); //0 

console.log('' || 'Cat'); //Cat


console.log("4" < "12"); //false, 4 is after 1, - string comparison is based on lexicographical order
console.log("abc" < "cbd") //a is before c -> true, alphabetical order comparison