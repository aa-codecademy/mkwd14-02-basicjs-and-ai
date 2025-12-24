let day = 9; // 1 - 7

// if (day === 1) {
//     console.log('Monday');
// } else if (day === 2) {
//     console.log('Tuesday');
// } else if (day === 3) {
//     console.log('Wednesday');
// } else if (day === 4) {
//     console.log('Thursday');
// } else if (day === 5) {
//     console.log('Friday');
// } else if (day === 6) {
//     console.log('Saturday');
// } else if (day === 7) {
//     console.log('Sunday');
// } else {
//     console.log('No day with this number exists');
// }

switch(day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

// if (day === 1 || day === 3 || day === 5) {
//     console.log('Academy days');
// } else if (day === 2 || day ===4) {
//     console.log('Free days');
// } else if (day === 6 || day ===7) {
//     console.log('Weekend');
// } else {
//     console.log('Wrong day');
// }

switch(day) {
    case 1:
    case 3:
    case 5:
        console.log('Academy days');
        break;
    case 2:
    case 4:
        console.log('Free days');
        break;
    case 6:
    case 7:
        console.log('Weekend');
        break;
    default:
        console.log('Wrong day');
        break;
}

let name = 'Trajan';

switch(name) {
    case 'Bob':
        console.log('Hello');
        break;
    case 'Trajan':
        console.log('Hello again');
        break;
    default:
        console.log('Bye');
        break;
}