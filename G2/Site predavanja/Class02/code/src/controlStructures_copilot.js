// Existing examples (no changes, no Copilot comments)
let score = 75;
if(score > 100){
    //This block will not get executed because the condition after if is not met
    console.log('Score is greater than 100');
}

console.log(score> 100);

let score2 = 102;
if(score2 > 100){
    //This block will get executed because the condition after if is met
    console.log('Score2 is greater than 100');
}

let points = 51;
if(points > 60){
    console.log("The student passed the exam");
    console.log(`The score is ${points}`);
}
else{
    console.log("The student failed!");
    var sum = 4 + 34;
    console.log(sum);
}

console.log("Grades - if-else")
let scoredPoints = 43;
if(scoredPoints >= 91){
    console.log("Grade A");
}
else if(scoredPoints >= 81 && scoredPoints <= 90){
    console.log('Grade B');
}
else if(scoredPoints >= 71 && scoredPoints <= 80){
    console.log('Grade C');
}
else if(scoredPoints >= 61 && scoredPoints <= 70){
    console.log('Grade D');
}
else{
    console.log("you failed!");
}

// === New Examples with Copilot Prompts ===

// Copilot Prompt: I want to ask the user for a number and check if it is even or odd.
// Print "Even" if divisible by 2, otherwise print "Odd".
let userNumber = parseInt(prompt("Enter a number:"));
if(userNumber % 2 === 0){
    console.log("Even");
} else {
    console.log("Odd");
}

// Copilot Prompt: I want to suggest an activity based on the temperature.
// Ask the user for the temperature in Celsius and suggest:
// "Go swimming" if temp >= 30,
// "Go for a walk" if temp between 20-29,
// "Stay inside" if temp < 20.
let temp = parseInt(prompt("Enter the temperature in Celsius:"));
if(temp >= 30){
    console.log("Go swimming");
} else if(temp >= 20){
    console.log("Go for a walk");
} else {
    console.log("Stay inside");
}
