# 🧠 JavaScript Practice Tasks

## 📚 Topics Covered

* Variables
* Data types
* Logical operators
* `prompt()`
* `parseInt()`
* Control structures (`if / else`)
* String concatenation

---

## 🧒 Task 1: Age Checker


### Requirements

1. Ask the user to enter their age using `prompt()`.
2. Convert the input to a number using `parseInt()`.
3. Check:

   * If the age is **less than 13**, display: `"You are a child."`
   * If the age is **between 13 and 17**, display: `"You are a teenager."`
   * If the age is **18 or older**, display: `"You are an adult."`
4. Display the message using string concatenation.

### ⭐ Bonus (Invalid Input Handling)

* If the user enters a value that is **not a number** or a **negative number**, display:
  `"Please enter a valid age."`

---

## 🔢 Task 2: Number Sign & Parity Checker 

### Requirements

1. Ask the user to enter a number using `prompt()`.
2. Convert the input into a number using `parseInt()`.
3. Check:

   * If the number is **positive, negative, or zero**.
   * If the number is **even or odd**.
4. Display a message using string concatenation, for example:
   `"The number -4 is negative and even."`

### ⭐ Bonus (Invalid Input Handling)

* If the user does **not** enter a valid number, display:
  `"Invalid input. Please enter a number."`

---

## 🔐 Task 3: Login Validation

### Requirements

1. Store a predefined username and password in variables.
2. Ask the user to enter a username and password using `prompt()`.
3. Check:

   * If **both** the username and password match, display: `"Login successful."`
   * Otherwise, display: `"Incorrect username or password."`

### ⭐ Bonus (Invalid Input Handling)

* If either the username or password is left empty, display:
  `"Username and password cannot be empty."`

---

## 🧮 Task 4: Simple Calculator

### Requirements

1. Ask the user to enter two numbers.
2. Ask the user to choose an operation (`+`, `-`, `*`, `/`).
3. Perform the chosen operation using control structures.
4. Display the result using concatenation, for example:
   `"5 + 3 = 8"`

### ⭐ Bonus (Invalid Input Handling)

* If the user enters an invalid operation, display:
  `"Invalid operation selected."`
* If the user tries to divide by zero, display:
  `"Division by zero is not allowed."`

---

## 📝 Task 5: Grade Evaluator

### Requirements

1. Ask the user to enter a score between **0 and 100**.
2. Convert the input to a number using `parseInt()`.
3. Determine the grade:

   * `90–100`: `"A"`
   * `80–89`: `"B"`
   * `70–79`: `"C"`
   * `60–69`: `"D"`
   * Below `60`: `"F"`
4. Display a message like:
   `"Your score is 85 and your grade is B."`

### ⭐ Bonus (Invalid Input Handling)

* If the score is **less than 0**, **greater than 100**, or not a number, display:
  `"Please enter a valid score between 0 and 100."`

---

