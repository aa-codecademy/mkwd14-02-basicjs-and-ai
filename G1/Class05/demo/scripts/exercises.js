// Write a JavaScript function that takes an array and a string 
// ("odd" or "even")
// and returns only the numbers that match that type.

function oddOrEven(numbers, type) {
    let result = [];
    if(type === 'odd') {
        for(let num of numbers) {
            if(num % 2 !== 0) {
                result.push(num);
            }
        }
    } else if (type === 'even') {
        for(let num of numbers) {
            if(num % 2 === 0) {
                result.push(num);
            }
        }
    }
    return result;
}



// Create a variable named purchases that is an array of numbers. 
// Each number represents the total dollar amount of a single customer's visit 
// (e.g., [5, 12, 18, 7, 22]).

// Create a function called calculatePoints that takes one parameter 
// (the purchase amount).
// If the purchase is over $20, the customer gets 3 points.
// If the purchase is between $10 and $20, they get 2 points.
// If the purchase is under $10, they get 1 point.
// Return the points earned.

// Use a loop to iterate through the purchases array.
// Inside the loop, keep a running total of the points earned.
// Use a control structure (if/else) at the end to check the final point total:
// If the total points are 10 or more, print: "Reward Earned: Free Coffee!"
// Otherwise, print: "Points needed for reward: [number]", calculating exactly 
// how many more points are required to reach 10.