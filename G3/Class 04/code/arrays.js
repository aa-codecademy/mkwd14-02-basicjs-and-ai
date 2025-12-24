//the index count starts from 0
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; // array - list of days in a week
let day = "Monday"; // variable - string containing the name of a day

console.log(days);
console.log(days[2]); // Accessing the third element in the array

let emptyArray = [];
console.log(emptyArray); // Logging an empty array

//our array in js can contain different types of data
let mixedArray = ["G3", 42, false, null, [1, 2], 'hello'];
console.log(mixedArray); // Logging an array with mixed data types

//we can change the value of an item in the array by acceessing its index and assigning a new value
console.log("Before change: ", mixedArray[1]);
mixedArray[1] = 100; // Changing the second element from 42 to 100
console.log("After change: ", mixedArray[1]);
console.log(mixedArray); // Logging the modified array

console.log(`There are ${days.length} days in a week.`); // Logging the length of the days array

//The last element of an array
console.log(days[days.length - 1]); // Accessing the last element using length property
days[days.length - 1] = "Funday"; // Changing the last element to "Funday"
days[5-2]; //days[3]


//One way of adding new items to an array
let studentsG3 = ["Kristijan", "Lazar", "Elena"];
console.log("Before adding new items " + studentsG3);
console.log(studentsG3);
studentsG3[studentsG3.length] = "Marija"; // Adding "Marija" to the end of the array
console.log("After adding one new item " + studentsG3);
console.log(studentsG3);
studentsG3[studentsG3.length] = ["Stefan", "Valentino"]; // Adding another array as an element, 
console.log("After adding two new items " + studentsG3);
console.log(studentsG3);

//Some methods we can use to manipulate arrays

//push() - adds one or more elements to the END of an array
studentsG3.push("Oleg");
console.log(studentsG3);
studentsG3.push("Alen", "Gabriela");
console.log(studentsG3);

//unshift() - adds one or more elements to the BEGINNING of an array
studentsG3.unshift("Jovana");

//pop() - removes one item from the END of the array and RETURNS that item
let removedStudent = studentsG3.pop();
console.log("Removed student: " + removedStudent);
console.log(studentsG3);

//shift() - removes one item from the BEGINNING of the array and RETURNS that item
let firstStudent = studentsG3.shift();
console.log("First student removed: " + firstStudent);
console.log(studentsG3);
