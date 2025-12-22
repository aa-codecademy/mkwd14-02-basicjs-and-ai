// const moneyUserHas = prompt("How much money do you have?");

// const parsedMoney = parseFloat(moneyUserHas);

// if (isNaN(parsedMoney)) {
//   console.log("Please enter a valid number.");
// } else if (parsedMoney < 0) {
//   console.log("Money cannot be negative.");
// } else if (parsedMoney >= 1300) {
//   console.log("Go ahead and buy the RTX5070!");
// } else if (parsedMoney >= 700) {
//   console.log("Go ahead and buy the RTX3060!");
// } else if (parsedMoney >= 300) {
//   console.log("Go ahead and buy the GTX1660!");
// } else {
//   console.log("You cannot afford any of the listed graphics cards.");
// }

// let yearOfTheNeznamSho = 3;

const day = "Nutella";

switch (day) {
  case "Mon":
  case "Tue":
  case "Wed":
  case "Thu":
  case "Fri":
    console.log("Workday");
    break;
  case "Sat":
  case "Sun":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

