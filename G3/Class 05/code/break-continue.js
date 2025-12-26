let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

for(let day of days){
    //print until Wednesday - when it reaches wednesday (when the if is true) - break this loop - end this loop
    if(day === "Wednesday"){
        break;
    }
    console.log(day);
}


for(let day of days){
    //print all days except Wednesday - skip that iteration
    if(day === "Wednesday"){
        continue;
    }
    console.log(day);
}


//BONUS example
while (true) {
    let input = prompt("Please enter an input or enter X if you want to exit");

    if (input === "x" || input === "X") {
        break; //we exit the infinite loop if the user enter x
    }
    console.log(input);
}