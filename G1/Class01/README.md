# Introduction to JavaScript 👋

## Getting Started

JavaScript is a separate programming language from HTML and CSS and goes in a separate element called the script element. We can write all our JavaScript code in the Script element, but that is usually a bad practice. A good way to write JavaScript is to create a separate file with the .js extension and write the code there. That file can then be connected to the HTML file through the src attribute on the script element. Similarly, as we connect an external CSS file, we can also connect an external js file.

> Note: The script tag in most scenarios goes at the end of the body tag

### Writing code directly in the script element

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <script>
        alert("Hello Avenga!");
    </script>
  </body>
</html>
```

### Connecting an external javascript file

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
alert("Hello Avenga!");
```

> Note: This code is in a separate file called script.js in the same folder as the index.html

Here are AI prompts that could lead us to these answers:

* How does an external JavaScript file connect to an HTML file?
* What is the difference between writing code inside `<script>` vs in a separate `.js` file?
* Why is it recommended to put `<script>` at the end of the `<body>`?
* How would you explain the process of loading and executing JavaScript in the browser?

## JavaScript and the Browser

We can interact with the browser through JavaScript in many ways. One of them is to pop alerts on the screen. This method stops the webpage until the popup alert is closed. Another way to interact is through the console. Every modern browser has a developer mode that enables extra tools for developers. Among these tools, is the browser console. This is a very important feature for developers that are using JavaScript because of all errors, warnings, and logs. To open the console you would need to:

1. Hit F12 or find Developer Tools in the tools menu
2. Find the Console tab

> Note: You can also type JavaScript code in the console on the spot and execute it

### Alert

```js
alert("Hello Avenga!");
```

### Console Log

```js
console.log("Hello Avenga!");
```

Here are AI prompts that could lead us to these answers:

* What is the difference between `alert()` and `console.log()`?
* When should you use `alert()` vs `console.log()` in real applications?
* How can you open and use the browser console in different browsers?
* What happens to the program execution when `alert()` is used?
* Show an example where both `alert()` and `console.log()` are useful together.

## Comments

```js
// This is a single line comment
// It will not be executed when the code runs

/*
This is a multi-line comment.
It is the same as the single line, but you can write in multiple lines :D
*/
```

Here are AI prompts that could lead us to these answers:

* What is the purpose of comments in JavaScript?
* How do single-line and multi-line comments differ in usage?
* Can you give examples of where adding comments improves code readability?

## Variables

```js
// Declaration ( Older way )
var number01;

// Declaration ( Modern way )
let number02;

// Initialization
number01 = 1;
number02 = 2;

// Declaration and Initialization at the same time
let number03 = 3;

// Handling multiple variables at once
let one, two, three; // Declaration
let four = 4, five = 5, six = 6; // Declaration and initialization
```

🤖 Here are AI prompts that could lead us to these answers:

* How can we temporarly store data in memory in javascript and access and use it?
* What is the difference between `var`, `let`, and `const`?
* How can multiple variables be declared in one line?
* How does variable scope differ between `var` and `let`?

## Data Types

```js
// Undefined
let nothing;
console.log(typeof x); // Type is undefined

// Number
let number = 5;
let decimal = 2.4;
console.log(typeof number); // Type is number
console.log(typeof decimal); // Type is number

// String
let singleQuoteString = 'Hello Avenga!';
let doubleQuoteString = "Hello Avenga!";
console.log(typeof singleQuoteString); // Type is string
console.log(typeof doubleQuoteString); // Type is string

// Boolean
let boolValue = true;
console.log(typeof boolValue); // Type is boolean

// Null ( Empty complex value )
let nullValue = null;
console.log(typeof nullValue); // Type is object
```

🤖 Here are AI prompts that could lead us to these answers:

* What are the basic data types in JavaScript?
* How can you check the type of a variable?
* Why does `typeof null` return "object"?
* Provide examples of using `string`, `number`, `boolean`, `null`, and `undefined`.

## Operations in JavaScript

```js
// Arithmetic operation that will execute in the console.log, and then show the result
console.log(2 + 3);

// Arithmetic operation that will execute in the variable and store the result. After that we show the result
let result = 5 - 1 * ( 2 * 5 ) / 6;
console.log(result);

// Shorthand for incrementing and decrementing
let increment = 1;
increment++;
console.log(increment); // Will show 2

// Shorthand for doing operations on the current value of a variable
let num1 = 5;
num1 = num1 + 10;
console.log(num1); // Will show 15
let num2 = 5;
num2+= 10;
console.log(num2); // Will show 15

// Comparison operators always result in a boolean value
console.log(2 > 5); // Will show false

// Result of a comparison operator can be stored
let complexLogicalOperation = (2 + 10) == (120 - 108); // Will store true
console.log(complexLogicalOperation); // Will show true
```

🤖 Here are AI prompts that could lead us to these answers:

* What are the arithmetic operators in JavaScript?
* How do increment (`++`) and decrement (`--`) operators work?
* Explain shorthand operators like `+=`, `-=`, `*=`, `/=`.
* How do comparison operators work and what type of value do they return?
* Provide examples of storing the result of logical operations in a variable.
