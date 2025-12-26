function sumOfSquares(start, end){
    let sum = 0;
    while (start <= end) {
        //sum = sum + Math.pow(start, 2);
        sum += Math.pow(start, 2);  //start * start  += -= *= /= %=
        start++;
    } 
    return sum; //the return must be after the loop ends
}

let result1 = sumOfSquares(101, 150);
console.log(result1);
let result2 = sumOfSquares(1, 12);
console.log(result2);
let result3 = sumOfSquares(56, 100);
console.log(result3);