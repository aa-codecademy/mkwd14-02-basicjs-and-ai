let switchVariable = "value 3";

if(switchVariable=="value 1"){  
    console.log("The value is 1");
} else if(switchVariable=="value 2"){
    console.log("The value is 2");
}else if(switchVariable=="value 3"){
    console.log("The value is 3");
} else{
    console.log("The value is unknown");
}

//switch is useful when you have many conditions to check against a single variable

//switchVariable is the switch value that we will be checking against
switch(switchVariable){
    case "value 1":
        //code to be executed if switchVariable === "value 1"
        console.log("The value is 1");
        break;
    case "value 2":
        //code to be executed if switchVariable === "value 2"
        console.log("The value is 2");
        break;
    case "value 3":
        //code to be executed if switchVariable === "value 3"
        console.log("The value is 3");
        break;
    //more cases
    default:
        //code to be executed if none of the cases match
        console.log("The value is unknown");
        //break;
}

//Example - program to get the day of the week

let inputDay = prompt("Enter a day of the week (1-7): ");
let parsedInputDay = parseInt(inputDay);

if (isNaN(parsedInputDay)) {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}
else {
    switch (parsedInputDay) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid input! Please enter a number between 1 and 7.");
    }
}

//another way to do it - without validations
switch(inputDay){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
    case "3":
        console.log("Wednesday");
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");      
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}

//fall through 
switch(parsedInputDay){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a working day :(");
        break;
    case 6:
    case 7:
        console.log("It's the weekend! :)");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}