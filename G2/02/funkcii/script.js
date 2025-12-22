function sumTwoNumbersAndCheckIfInputIsOk(input1, input2) {
  input1 = parseFloat(input1);
  input2 = parseFloat(input2);
  if (isNaN(input1) || isNaN(input2)) {
    alert("One of the inputs is not a number");
    return;
  }
  const sum = input1 + input2;
  return sum;
}

const prompt1 = prompt("Enter first number:");
const prompt2 = prompt("Enter second number:");
const prompt3 = prompt("Enter third number (not used):");
const prompt4 = prompt("Enter fourth number (not used):");

const result = sumTwoNumbersAndCheckIfInputIsOk(prompt1, prompt2);
const result2 = sumTwoNumbersAndCheckIfInputIsOk(prompt3, prompt4);

if (result !== undefined && result2 !== undefined) {
  confirm(
    `The sum of ${prompt1} and ${prompt2} is ${result}, and the sum of ${prompt3} and ${prompt4} is ${result2}.`
  );
} else if (result !== undefined) {
  confirm(`The sum of ${prompt1} and ${prompt2} is ${result}.`);
} else if (result2 !== undefined) {
  confirm(`The sum of ${prompt3} and ${prompt4} is ${result2}.`);
} else {
  alert("No valid sums could be calculated.");
}

function isNewYearsDay() {
  const today = new Date();
  return today.getDate() === 1 && today.getMonth() === 0;
}

if (isNewYearsDay()) {
  alert("Happy New Year!");
} else {
  alert("No happy new year today.");
}

function isTwentySecondOfDecember() {
  const today = new Date();
  return today.getDate() === 22 && today.getMonth() === 11; //12 is December, but months are 0-indexed so January is 0 and december is actually 11
}

if (isTwentySecondOfDecember()) {
  alert("It's 22nd of December!");
} else {
  alert("It's not 22nd of December.");
}
isTwentySecondOfDecember();
isTwentySecondOfDecember();

// const thisYear = 2025;
// const nextYear = thisYear + 1;
// sumTwoNumbers(32, 5);
// sumTwoNumbers(thisYear, nextYear);
