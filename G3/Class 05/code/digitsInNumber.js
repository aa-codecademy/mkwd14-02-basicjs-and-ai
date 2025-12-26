function digitsInNumber(inputNumber){    
   console.log(inputNumber);
   while(inputNumber > 0){
     console.log("digit " + inputNumber%10); //this way we get the remaining part when we divide by 10 - the last digit is always the remaining part (ex. 23432 -> 2 is the remaining part, 23430 - 0 is the remaining part)
     inputNumber = parseInt(inputNumber/10); //this way we get the whole part without the last digit (23432/10 -> 2343.2 -> the whole part is 2343)
     console.log("Input " + inputNumber);
    }
}

digitsInNumber(2341);
digitsInNumber(4334525263);
digitsInNumber(Math.floor(Math.random() *10))

let input = prompt("Please enter a number");
let number = Number(input);
digitsInNumber(number);