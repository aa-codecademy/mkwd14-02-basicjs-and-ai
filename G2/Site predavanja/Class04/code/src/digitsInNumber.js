function digitsInNumber(input){

    console.log(`input: ${input}`);

   while(input > 0){
       console.log(input%10);
       input = parseInt(input/10);
       console.log(`input: ${input}`);
   }
}

digitsInNumber(243);
digitsInNumber(6476374);


// Copilot: Test the function with a couple of numbers
digitsInNumber(243);
digitsInNumber(6476374);


//Optional:
// Can you modify this function to return the digits in an array instead of printing?

function digitsInNumberArray(input){
    let digits = [];
    console.log(`input: ${input}`);

   while(input > 0){
       digits.push(input%10);
       input = parseInt(input/10);
       console.log(`input: ${input}`);
   }
   return digits;
}

console.log(digitsInNumberArray(243)); // [3,4,2]
console.log(digitsInNumberArray(6476374)); // [4,7,3,6,7,4,6]


// Can you make it print digits from first to last instead of last to first?
function digitsInNumberArrayReversed(input){
    let digits = [];
    console.log(`input: ${input}`);

   while(input > 0){
       digits.unshift(input%10);
       input = parseInt(input/10);
       console.log(`input: ${input}`);
   }
   return digits;
}

console.log(digitsInNumberArrayReversed(243)); // [2,4,3]
console.log(digitsInNumberArrayReversed(6476374)); // [6,4,7,6,3,7,4]   