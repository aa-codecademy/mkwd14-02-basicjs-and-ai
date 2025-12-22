let input = prompt("How much money do you have?");
let money = parseInt(input);

if(isNaN(money)) {
    console.log("Please enter a valid number.");
}else if(money > 500){
    console.log("You have a lot of money!");
}else if (money <= 500 && money >= 300){
    console.log("You have a moderate amount of money. Buy some food");
}else{
    console.log("Consider saving more money.");
}