let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(let i = 0; i < numbers.length; i += 1) {
    let num = numbers[i];

    // code block
}

// for(let num of numbers) {
//     console.log(num);
// }

// let days = ['Monday', 'Friday'];

// for(let day of days) {
//     console.log(day);
// }

// for(let index in numbers) {
//     console.log(index);
// }

// for(let index in days) {
//     console.log(index);
// }

// let obj = {
//     prop1: 'Trajan',
//     prop2: 'Stevkovski'
// }

// for(let propName in obj) {
//     console.log(propName);
// }


let workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

for(let day of workingDays) {
    console.log('Before if', day);
    if(day === 'Wed') {
        break;
    }
    console.log(day);
}

for(let day of workingDays) {
    console.log('It is ' + day);
    if (day === 'Tue' || day === 'Thu') {
        continue;
    }
    console.log('Doing some big calculations.....');
}