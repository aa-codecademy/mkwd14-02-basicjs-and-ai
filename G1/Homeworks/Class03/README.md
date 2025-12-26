# 📘 JavaScript Homework – Functions & Logic

## General Rules (Read First)

* You must write a **function** for every task
* Every function must **return a value**
* Only use `console.log` to print the returned value from the function
* Do **NOT** use loops or arrays
* Validate inputs before calculating
* Inputs should be taken with `prompt`
* All functions should be created in **ONE** script
---

## 1️⃣ `minutesToSeconds(minutes)`

### What to do

Convert minutes into seconds.

* Input must be a number
* Negative values return `null`
* `0` minutes returns `0`

### Expected Outputs

```js
minutesToSeconds(5)    → 300
minutesToSeconds(0)    → 0
minutesToSeconds(-2)   → null
minutesToSeconds("5")  → null
```

---

## 2️⃣ `hoursToMinutes(hours)`

### What to do

Convert hours into minutes.

* Input must be a number
* Negative values return `null`

### Expected Outputs

```js
hoursToMinutes(2)    → 120
hoursToMinutes(0)    → 0
hoursToMinutes(-1)   → null
hoursToMinutes("2")  → null
```

---

## 3️⃣ `hoursToSeconds(hours)`

### What to do

Convert hours into seconds.

* Validate input
* Return `null` if invalid

### Expected Outputs

```js
hoursToSeconds(1)    → 3600
hoursToSeconds(0)    → 0
hoursToSeconds(-1)   → null
hoursToSeconds("1")  → null
```

---

## 4️⃣ `daysToHours(days)`

### What to do

Convert days into hours.

* Input must be a number
* Negative values return `null`

### Expected Outputs

```js
daysToHours(1)    → 24
daysToHours(0)    → 0
daysToHours(-1)   → null
daysToHours("1")  → null
```

---

## 5️⃣ `daysToSeconds(days)`

### What to do

Convert days into seconds.

* Validate input
* Return `null` if invalid

### Expected Outputs

```js
daysToSeconds(1)    → 86400
daysToSeconds(0)    → 0
daysToSeconds(-1)   → null
daysToSeconds("1")  → null
```

---

## 6️⃣ `isTruthyValue(value)`

### What to do

Check whether a value is truthy or falsy.

* Return `true` if truthy
* Return `false` if falsy

### Expected Outputs

```js
isTruthyValue(1)     → true
isTruthyValue(0)     → false
isTruthyValue("hi")  → true
isTruthyValue("")    → false
```

---

## 7️⃣ `areBothTruthy(a, b)`

### What to do

Check if **both** values are truthy.

### Expected Outputs

```js
areBothTruthy(1, "a")   → true
areBothTruthy(1, 0)     → false
areBothTruthy("", "a")  → false
areBothTruthy(true, 1)  → true
```

---

## 8️⃣ `getStringLength(text)`

### What to do

Return the length of a string.

* Empty string returns `0`
* Invalid input returns `null`

### Expected Outputs

```js
getStringLength("hello")  → 5
getStringLength("")       → 0
getStringLength("a")      → 1
getStringLength(5)        → null
```

---

## 9️⃣ `getFirstAndLastChar(text)`

### What to do

Return the first and last character together.

* Input must be a string
* Strings shorter than 2 characters return `null`

### Expected Outputs

```js
getFirstAndLastChar("hello")  → "ho"
getFirstAndLastChar("ab")     → "ab"
getFirstAndLastChar("a")      → null
getFirstAndLastChar(5)        → null
```

---

## 🔟 `capitalizeIfLong(text)`

### What to do

Capitalize the first letter **only if** the string has 5 or more characters.

### Expected Outputs

```js
capitalizeIfLong("hello")  → "Hello"
capitalizeIfLong("world")  → "World"
capitalizeIfLong("hi")     → "hi"
capitalizeIfLong(5)        → null
```

---

## 1️⃣1️⃣ `isVowel(char)`

### What to do

Check if a single character is a vowel (`a, e, i, o, u`).

* Ignore letter case

### Expected Outputs

```js
isVowel("a")  → true
isVowel("E")  → true
isVowel("b")  → false
isVowel("ab") → false
```

---

## 1️⃣2️⃣ `getLargerNumber(a, b)`

### What to do

Return the larger number.

* If numbers are equal, return one of them
* Invalid input returns `null`

### Expected Outputs

```js
getLargerNumber(5, 10)   → 10
getLargerNumber(7, 7)    → 7
getLargerNumber(-1, 2)   → 2
getLargerNumber("5", 2)  → null
```

---

## 1️⃣3️⃣ `getMiddleNumber(a, b, c)`

### What to do

Return the number that is neither the smallest nor the largest.

* All values must be different
* Invalid input returns `null`

### Expected Outputs

```js
getMiddleNumber(1, 2, 3)  → 2
getMiddleNumber(3, 1, 2)  → 2
getMiddleNumber(2, 2, 3)  → null
getMiddleNumber("1", 2, 3)→ null
```

---

## 1️⃣4️⃣ `formatFullName(firstName, lastName)`

### What to do

Return a formatted full name.

* Both values must be strings
* If either value is falsy, return `null`
* Format: `"LastName, FirstName"`

### Expected Outputs

```js
formatFullName("John", "Doe")  → "Doe, John"
formatFullName("Jane", "Lee")  → "Lee, Jane"
formatFullName("", "Doe")      → null
formatFullName(5, "Doe")       → null
```

---

## 1️⃣5️⃣ `isValidUsername(username)`

### What to do

Validate a username.

* Must be a string
* Length between **5 and 12**
* Must NOT start with a number

### Expected Outputs

```js
isValidUsername("user12")   → true
isValidUsername("1user")    → false
isValidUsername("abc")      → false
isValidUsername("longusername123") → false
```

---

