function convertCelsiusToFahrenheit(celsius) {
    const value = Number(celsius);
    if (isNaN(value)) {
        return "Invalid input: please provide a numeric value";
    }
    return value * 1.8 + 32;
}
// function convertCelsiusToFahrenheit(celsius) {
//     return celsius * 1.8 + 32;
// }

// function convertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = celsius * 1.8 + 32;
//     console.log("The temperature in fahrenheit is " + fahrenheit);
// }

console.log(convertCelsiusToFahrenheit(0));    // 32

function convertFahrenheitToCelsius(fahrenheit) {
    let celsius = 5 / 9 * (fahrenheit - 32);
    return celsius;
}
let fahrenheitTempInCelsisus = convertFahrenheitToCelsius(32);
console.log(convertFahrenheitToCelsius(32)); // 0
