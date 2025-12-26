// const arrayOfDays = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// arrayOfDays.push("Funday");

// arrayOfDays.unshift("Pre-day");

// console.log(arrayOfDays);

// //simple data types
// let a = 10; //number
// let someString = "Hello"; //string
// let isTrue = false; //boolean
// let nothing = null; //null
// let notDefined; //undefined

// console.log("before assigning new value", a);
// a = 20;
// console.log("after assigning new value", a);

// //referent data types
// const arrayOfNumbers = [1, 2, 3, 4, 5];

// const anotherArray = arrayOfNumbers;
// console.log(anotherArray);
// anotherArray.push(6);
// console.log(arrayOfNumbers);

// Student Exercise
// Decription: The Math object allows you to perform mathematical tasks.
// Math.pow(x,y); - Returns the value of x to the power of y
// Action: Write a JavaScript program to write the sum of squares of the numbers from 101 to 150
// Time to accomplish: 15 minutes.

// const arrayOfRandomNumbers = [1, 3, 5, 25, 2, 8, 7, 4, 10, 6];

// let i = 0;
// // let biggestFoundNumber = -Infinity;
// let biggestFoundNumber = arrayOfRandomNumbers[0];

// while (i < arrayOfRandomNumbers.length) {
//   const numberToWorkWith = arrayOfRandomNumbers[i];
//   if (numberToWorkWith > biggestFoundNumber) {
//     biggestFoundNumber = numberToWorkWith;
//   }
//   console.log(numberToWorkWith);
//   i++;
// }
// console.log(`The biggest number found in this array was ${biggestFoundNumber}`);

// console.time("bigWhileLoop");
// let i = 0;
// while (i < 1_000_000_000) {
//   i++;
// }
// console.timeEnd("bigWhileLoop");

// console.time("bigForLoop");
// for (let i = 1_000_000_000; i > 0; i--) {

//   // do nothing
// }
// console.timeEnd("bigForLoop");

// let days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// const arrOfOneBillion = new Array(1_000_000_0).fill(1);

// console.time("bigForLoop");
// for (let i = 0; i < arrOfOneBillion.length; i++) {}
// console.timeEnd("bigForLoop");

// console.time("bigForOfLoop");
// for (let number of arrOfOneBillion) {
// }
// console.timeEnd("bigForOfLoop");

// console.time("bigForEachLoop");
// arrOfOneBillion.forEach((element, index) => {});
// console.timeEnd("bigForEachLoop");

// let days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];

// for (let i = 0; i < days.length; i++) {
//   if (days[i] === "Thursday") {
//     break;
//   }
//   console.log(days[i]);
// }

// for (let i = 0; i < days.length; i++) {
//   if (days[i] !== "Wednesday") {
//     continue;
//   }
// }

// const groceries = ["Bread", "Milk", "Butter"];

// function addToGroceriesList(item) {
//   if (typeof item === "string") {
//     // Checking if item is string
//     groceries.push(item);
//     console.log(`You have added ${item} to the list!`);
//   } else {
//     console.log(`The item ${item} was not added to the list. Sorry.`);
//   }
// }
// // Calling the adding function
// addToGroceriesList("Salad");

// function showGroceriesList() {
//   let listNum = 1; // counter for item numeration
//   console.log("My groceries list:");
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] !== null) {
//       // a check to not show deleted items
//       console.log(`${listNum}. ${groceries[i]}`);
//       listNum++; // We add one if the item is not deleted (null)
//     }
//   }
// }

// function deleteItemFromGroceries(item) {
//   for (let i = 0; i < groceries.length; i++) {
//     if (groceries[i] === item) {
//       console.log("Item has been deleted!");
//       groceries[i] = null; // we set the deleted item to null
//       return true;
//     }
//   }
//   return false;
// }

// showGroceriesList();

// deleteItemFromGroceries("Milk");

// showGroceriesList();

const numbers = [1, 2, 3, 4, 5, 1, 5, 1];
const copyOfNumbers = [...numbers];

const anotherCopyOfNumbers = JSON.parse(JSON.stringify(numbers));

function findHowManyTimesNumberIsInArray(array, numberToFind) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numberToFind) {
      count++;
    }
  }
  console.log(
    `The number ${numberToFind} is contained ${count} times in the array`
  );
}

findHowManyTimesNumberIsInArray(numbers, 1);
findHowManyTimesNumberIsInArray(numbers, 5);
findHowManyTimesNumberIsInArray(numbers, 10);

function filterOddOrEven(array, type) {
  if (type !== "odd" && type !== "even") {
    console.warn("Invalid type specified. Use 'odd' or 'even'.");
    return [];
  }
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (typeof num !== "number") continue;
    if (type === "odd" && num % 2 !== 0) {
      result.push(num);
    } else if (type === "even" && num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}

const oddNumbers = filterOddOrEven(numbers, "odd");
console.log(oddNumbers);

// Example usage:
// console.log(filterOddOrEven(numbers, "odd")); // [1, 3, 5, 1, 5, 1]
// console.log(filterOddOrEven(numbers, "even")); // [2, 4]
