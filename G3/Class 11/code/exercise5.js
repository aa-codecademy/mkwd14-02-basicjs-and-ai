//Write an html that has one input field, one button and one select element. The input and button have id-s, and the select only has class attribute. A user should enter input, click on the button, and on click an option should be added to the select with the entered value.

//On blur of the input, validate if there is value entered. If not, print a message. Remember to check this scenario on the click also!

let myInput = document.getElementById("myInput");
let myButton = document.getElementById("myButton");
let mySelect = document.querySelector(".mySelect");
//let MySelectClass = document.getElementsByClassName("mySelect")[0]; //alternative way to select the select element
let message = document.getElementById("message");

//we need to listen for the click of the button
myButton.addEventListener("click", function () {
    message.textContent = ""; //clear previous message - if we had a click for an invalid alue, the message would show, but if after that we enter a valid input, and we click on the button we don't want the message to keep on showing, so we need to clear the p
    //validate 
    if (!myInput.value) { //we need the if to be executed only if there is no value. If there is no value, then the expression myInput.value will be falsy. Because we need to enter the if, we add negation - so that we transform falsy to truthy
        message.textContent = "Please enter a value!";
        return; //stop further execution
    }

    //create option element
    let newOption = document.createElement("option");
    newOption.setAttribute("value", myInput.value);
    newOption.setAttribute("name", myInput.value);
    newOption.textContent = myInput.value;
    mySelect.appendChild(newOption); //add the option to the select
    myInput.value = ""; //clear the input field after adding the option
});

myInput.addEventListener("blur", function () {
    message.textContent = "";
    if (!myInput.value) {
        message.textContent = "Please enter a value!";
    }
});