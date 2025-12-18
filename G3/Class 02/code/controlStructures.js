//IF-ELSE

let condition = 5 > 2; //true
//condition evaluates to true -> condition == true
if(condition){
    //The code inside this block will run if the condition is true
    //THIS WILL BE EXECUTED
    console.log("The first condition is true");
}
else{
    //The code inside this block will run if the condition is false
    //THIS WILL NOT BE EXECUTED
    console.log("The first condition is false");
}

let falseCondition = 3 > 7; //false

if(falseCondition){
    //The code inside this block will run if the condition is true
    //THIS WILL NOT BE EXECUTED
    console.log("The second condition is true");
}else{
    //The code inside this block will run if the condition is false
    //THIS WILL BE EXECUTED
    console.log("The second condition is false");
}

//Example 
let points = 51;

if(points >= 60){
    console.log("You passed the exam!");
}
else{
    console.log("You failed the exam.");
}   

let color = "red";

if(color === "blue"){
    console.log("The color is blue.");
}

//there is no else - the code in the if block will only run if the condition is true - so this time it will not be executed

//Multiple if-else

let score = 85;

if(score >= 91){
    console.log("You got an A!");
}else if(score >= 81  && score <= 90){
    console.log("You got a B!");
}else if(score >= 71 && score <= 80){
    console.log("You got a C!");
}else if(score >= 61 && score <= 70){
    console.log("You got a D!");
}else{
    console.log("You got an F!");
}