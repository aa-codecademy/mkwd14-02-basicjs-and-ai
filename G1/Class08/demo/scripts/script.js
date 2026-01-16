function greet() {
    alert('Hello world!');
}

function countRabits() {
    for(let i = 0; i < 3; i++) {
        console.log(`Rabit No.${i + 1}`);
    }
}


let btn = document.getElementById('btn');

btn.onclick = function() {
    alert('Hello World! second time');
}

function sayHello() {
    alert('SayHello');
}

// btn.onmouseover = sayHello;

// console.log(btn);

function three() {
    return 3;
}

// let four = three;

// let five = three();
// console.log(four);
// console.log(five);

let btn1 = document.getElementById('btn1');

// btn1.addEventListener('click', function() {
//     alert('Calling from event listener');
// });

let input = document.getElementById('input1');
let result = document.getElementById('result');

let history = [];

input.addEventListener('keypress', function(event) {
    // console.log('Hello');
    console.log(event);
    let value = event.target.value;
    result.innerText = value;

    if (event.keyCode === 13) {
        history.push(value);
        console.log(history);
    }
});