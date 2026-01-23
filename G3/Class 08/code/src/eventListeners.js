let myInputElement = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let myDiv = document.getElementById("myDiv");
let myFirstP = document.getElementsByClassName("firstP")[0];
console.log("=================START============");

function focusGreeting(){
    alert("Focus on input");
}
function blurGreeting(){
    alert("Input lost focus");
}

function buttonClick(){
    alert("Button clicked");
}

function sayHi(name){
    console.log(`HI ${name}`)
}

myInputElement.addEventListener("focus", focusGreeting);
//myInputElement.addEventListener("blur", blurGreeting);


myInputElement.addEventListener("blur", function(event){
    console.log(event.target.value);
    console.log(event);
})

myButton.addEventListener("click", buttonClick);
myButton.addEventListener("click", function(){
    console.log("SECOND EVENT CLICK");
});

myButton.addEventListener("click", function(){
    sayHi("Danilo");
});

myInputElement.addEventListener("blur", function(event){
    sayHi(event.target.value);
});

//NOT WORK
// myButton.removeEventListener("click", function(){
//     console.log("SECOND EVENT CLICK");
// });
myButton.removeEventListener("click", buttonClick);
myInputElement.removeEventListener("focus", focusGreeting);

myDiv.addEventListener("mouseover",function(){
    console.log("MY DIV");
}, true)
myFirstP.addEventListener("mouseover",function(){
    console.log("MY PARAGRAPH");
},true)

console.log("=================END============");
