let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
for(let i = 0; i < days.length; i++){
    console.log(`i ${i}`);
    console.log(`day: ${days[i]}`);
}

let numbers = [1, 23, 453, 231];

for(let i = 0; i < numbers.length; i++){
    console.log(`i ${i}`);
    console.log(`day: ${numbers[i]}`);
}

for(let num of numbers){
    console.log("Num " + num);
}

let sum = 0;

for(let num of numbers){
    sum += num;
}

console.log("Sum " +sum);