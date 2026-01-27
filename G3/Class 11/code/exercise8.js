//Create a function that takes an array of objects as input. Each object reprsents a person with the following properties: fullName , job, and salary. The function should return the sum of the salaries of the people.

//Hint: the array can be fixed and given in the code.

//array of objects
let people = [{ fullName: "Petko Petkovski", job: "teacher", salary: 500 },
{ fullName: "Janko Jankovski", job: "developer", salary: 800 },
{ fullName: "Stanko Stankovski", job: "designer", salary: 700 }];

function sumOfSalaries(arr) {
    let sum = 0;
    for (let element of arr) {
        sum += element.salary;
    }
    return sum;
}

console.log(sumOfSalaries(people)); // Output: 2000