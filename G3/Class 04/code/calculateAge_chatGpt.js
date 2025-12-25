
//show me a beginner version of the function calculateAge
// function calculateAge(birthYear) {
//     let currentYear = new Date().getFullYear();
//     console.log("Current Year: " + currentYear);
//     let age = currentYear - birthYear;
//     return age;
// }

// let age = calculateAge(1990); 
// console.log("Age is: " + age);

//use NaN for validation
// function calculateAge(birthYear) {
//     let year = Number(birthYear);

//     if (isNaN(year)) {
//         return NaN;
//     }

//     let currentYear = new Date().getFullYear();
//     return currentYear - year;
// }

//what about people whose bitrhdays have not yet passed
// function calculateAge(birthDate) {
//     let date = new Date(birthDate);

//     if (isNaN(date)) {
//         return NaN;
//     }

//     let today = new Date();

//     let age = today.getFullYear() - date.getFullYear();

//     let hasHadBirthday =
//         today.getMonth() > date.getMonth() ||
//         (today.getMonth() === date.getMonth() &&
//          today.getDate() >= date.getDate());

//     if (!hasHadBirthday) {
//         age = age - 1;
//     }

//     return age;
// }
// let age = calculateAge("1990-12-15");
// let age2 = calculateAge(new Date(1990, 11, 15)); 
// let age3 = calculateAge("12.12.1990");
// console.log("Age is: " + age);
// console.log("Age2 is: " + age2);
// console.log("Age3 is: " + age3);

// console.log(new Date(1990, 0, 15).getMonth()); // 0 = January

//what about leap years
function calculateAge(birthDate) {
    let date = new Date(birthDate);

    // if (isNaN(date)) {
    //     return NaN;
    // }

    let today = new Date(); //new Date() creates an object for the date that is today

    let age = today.getFullYear() - date.getFullYear();

    let birthMonth = date.getMonth();
    let birthDay = date.getDate();

    // Handle Feb 29 birthdays in non-leap years
    if (birthMonth === 1 && birthDay === 29) {
        let isLeapYear =
            today.getFullYear() % 4 === 0 &&
            (today.getFullYear() % 100 !== 0 ||
             today.getFullYear() % 400 === 0);

        if (!isLeapYear) {
            birthMonth = 2; // March
            birthDay = 1;
        }
    }

    let hasHadBirthday =
        today.getMonth() > birthMonth ||
        (today.getMonth() === birthMonth &&
         today.getDate() >= birthDay);

    if (!hasHadBirthday) {
        age--;
    }

    return age;
}

let age = calculateAge("11.11.1999");
console.log("Age is: " + age);
