let myButton = document.getElementById("myButton");
let mySecondButton = document.getElementById("mySecondButton");
let myDiv = document.getElementById("myDiv");


function btnClick(){
    alert("You click the button!");
}

function greeting(){
    alert("Happy New Year!");
}

function goodByeGreeting(){
    alert("GoodBye!");
}

function sayHi(){
    console.log("Hi!");
}


myButton.onclick = btnClick;
mySecondButton.onclick = btnClick;

//---------

mySecondButton.onclick = greeting;

myDiv.onmouseover = greeting;
myDiv.onmouseover = goodByeGreeting;
myDiv.onmouseover = sayHi;

//myButton.onmouseover = sayHi;