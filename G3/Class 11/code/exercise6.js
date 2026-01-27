//Write an html that has two input fields, one button and one paragraph. In the input fields enter the sides of a rectangle.

//On click on the button, calculate the area and print it in the paragraph.

//On mouse over on the paragraph, print the perimeter and change the color and font size of the paragraph.

//get the elements
let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");
let myButton = document.getElementById("myButton");
let message = document.getElementById("message");

myButton.addEventListener("click", function () {
    //validation - the first step is always to validate the input
    if (!sideA.value || !sideB.value) {
        message.textContent = "Please enter values for both sides.";
        return;
    }
    if (isNaN(sideA.value) || isNaN(sideB.value)) {
        message.textContent = "Please enter valid numbers for both sides.";
        return;
    }
    if (sideA.value <= 0 || sideB.value <= 0) {
        message.textContent = "Please enter positive numbers for both sides.";
        return;
    }

    message.textContent = `Area of ${sideA.value} and ${sideB.value}: ${(sideA.value * sideB.value)}`;
    // sideA.value = "";
    // sideB.value = "";
    message.style.color = "black";
    message.style.fontSize = "12px";
});

message.addEventListener("mouseover", function () {
    //validation - here we need to validate again because the user might have changed the input values after clicking the button
   if (!sideA.value || !sideB.value) {
        message.textContent = "Please enter values for both sides.";
        return;
    }
    if (isNaN(sideA.value) || isNaN(sideB.value)) {
        message.textContent = "Please enter valid numbers for both sides.";
        return;
    }
    if (sideA.value <= 0 || sideB.value <= 0) {
        message.textContent = "Please enter positive numbers for both sides.";
        return;
    }
    message.textContent = `Perimeter of ${sideA.value} and ${sideB.value}: ${sideA.value * 2 + sideB.value * 2}`;
    message.style.color = "blue";
    message.style.fontSize = "20px";
});

//we need to reset the style on mouse out (when we are no longer hovering over the paragraph)
message.addEventListener("mouseout", function () {
    message.style.color = "black";
    message.style.fontSize = "12px";
});