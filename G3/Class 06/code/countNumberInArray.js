function findNumber(number, array) {
    let occurenceCounter = 0; //initial value - before the for loop
    //for(let i = -; i< array.length; i++)
    for (let element of array) {
        if (element === number) {
            occurenceCounter++;
        }
    }
    return occurenceCounter; //after the for loop ends we return the number of occurences
}

let result = findNumber(5, [3, 43, 5, 66, 5, 7, 5]);
console.log(`The number 5 is present in the array ${result} times`);
console.log(`The number 5 is present in the array ${findNumber(5, [3, 43, 3, 66, 3, 7, 4])} times`);