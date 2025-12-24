//Global Scope
//variables and functions declared outside of any function or block have global scope
//they can be accessed from anywhere in the code
let globalNumber = 2000;
const pi = 3.14;

function printGlobalNumber(){
    console.log(globalNumber);
}

printGlobalNumber(); 

//Local Scope
//variables and functions declared within a function or block have local scope
//they can only be accessed from within that function or block

function localScopeExample(){
    let localNumber = 1000;
    console.log("Within the function " + localNumber);
}
//console.log("Outside the function " + localNumber); // This will cause an error
localScopeExample();

let sum = 0; //we decare sum in the global scope
if(5>3){
    sum = 5; //we can access and modify sum here - we change its value in the block of the if statement
}else{
    sum = 3;
}
console.log("Sum is: " + sum); // This will work because sum is declared in the global scope

function sumNumbers(a, b) {
    //sum2 is in local scope
    let sum2 = a + b;
    return sum2;
}
//console.lpg(a); //this will cause an error because a is in local scope

//result is in global scope
let result = sumNumbers(10, 20);

let res = 30; //res is in global scope
function printResult() {
   res = 50; //here we change the value of res. After calling the function, the value of res will be 50
   console.log("Result is: " + res);
}

console.log("Before calling printResult, res is: " + res); //This will print 30
printResult(); //This will print 50
console.log("After calling printResult, res is: " + res); //This will print 50


const greeting = "hello G3"; //greeting is in global scope
function greet() {
    const greeting = "hello World"; //this greeting is in local scope
    console.log(greeting); //This will print "hello World"
}

console.log(greeting); //This will print "hello G3"
greet();
console.log(greeting); //This will print "hello G3"

let message = "hello G3"; //greeting is in global scope
function messages() {
    let message = "hello World"; //this greeting is in local scope
    console.log(message); //This will print "hello World"
}

console.log(message); //This will print "hello G3"
messages();
console.log(message); //This will print "hello G3"

let message2 = "hello G3"; //greeting is in global scope
function messages2() {
    message2 = "hello World"; //this greeting is in local scope
    console.log(message2); //This will print "hello World"
}

console.log(message2);  //This will print "hello G3"
messages2(); //This will print "hello World"
console.log(message2);  //This will print "hello World"

let exampleVariable = 3;
function outerFunction(){
    let outerVariable = "I am from the outer function!";
   //avoid declaring function inside another function
    function innerFunction(){
        exampleVariable = 5; //inner function can access and modify outer function variable
        let innerVariable = "I am from the inner function!";
        console.log(outerVariable); //inner function can access outer function variable
        console.log(innerVariable);
    }

    //console.log(innerVariable); //This will cause an error
    innerFunction();
}

//innerFunction(); //This will cause an error
outerFunction();
//console.log(outerVariable); //This will cause an error
//console.log(innerVariable); //This will cause an error
console.log(exampleVariable); //This will print 5 because innerFunction modified it

//Block Scope
//variables declared with let or const within a block (e.g., inside { }) have block scope
if(5>3){
    let blockVariable = "I am inside the block!";
    console.log(blockVariable); //This will work
}
//console.log(blockVariable); //This will cause an error