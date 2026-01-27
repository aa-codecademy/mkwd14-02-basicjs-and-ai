//Create an html that contains one input field for entering circle raduis. Add one button for creating and printing the circle as object. The circle should have two methods: getArea() -> r^2*PI and getPerimeter() -> 2*r*PI. Add two more buttons for getting the area and the perimeter.

let radius = document.getElementById("radius");
let createButton = document.getElementById("createCircle");
let areaButton = document.getElementById("getArea");
let perimeterButton = document.getElementById("getPerimeter");
let message = document.getElementById("message");

//if we don't decare circle in global scope, it will be undefined in other event listeners
let circle; //we need to declare circle in a global scope, so that we can access it from anywhere
createButton.addEventListener("click", function() {
    //validation - if the user did not enter a radius or entered invalid value
    if (!radius.value || isNaN(radius.value) || radius.value <= 0) {
        message.innerText = "Please enter a valid positive number for radius.";
        return;
    }

     circle = {
        radius: parseFloat(radius.value),
        getArea: function() {
          //  return Math.PI * Math.pow(this.radius, 2);
          const pi = 3.14;
          return pi * this.radius * this.radius;
        },
        getPerimeter: function() {
          //  return 2 * Math.PI * this.radius;
          const pi = 3.14;
          return 2 * pi * this.radius;
        }
    };
    console.log("Circle created:", circle);
});


getArea.addEventListener("click", function() {
    if (!circle || !circle.hasOwnProperty("radius")) {
        message.innerText = "Please create a circle first.";
        return;
    }
    //toFixed(2) is used to limit the decimal points to 2
    message.textContent = "Area: " + circle.getArea().toFixed(2);
});

getPerimeter.addEventListener("click", function() {
    if (!circle || !circle.hasOwnProperty("radius")) {
        message.innerText = "Please create a circle first.";
        return;
    }   

    message.textContent = "Perimeter: " + circle.getPerimeter().toFixed(5);
});