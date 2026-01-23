/**
 * Adds two numbers.
 * @param {number} num - The first number.
 * @param {number} num1 - The second number.
 * @returns {number} The sum of the two numbers.
 */
function sum(num, num1) {
    return num + num1;
}

/**
 * Subtracts the second number from the first number.
 * @param {number} num - The first number.
 * @param {number} num1 - The second number.
 * @returns {number} The result of the subtraction.
 */
function substract(num, num1) {
    return num - num1;
}

/**
 * Multiplies two numbers.
 * @param {number} num - The first number.
 * @param {number} num1 - The second number.
 * @returns {number} The product of the two numbers.
 */
function multiply(num, num1) {
    return num * num1;
}

/**
 * Divides the first number by the second number.
 * @param {number} num - The numerator.
 * @param {number} num1 - The denominator. Must not be zero.
 * @throws {Error} Throws an error if either the numerator or denominator is zero.
 * @returns {number} The result of the division.
 */
function divide(num, num1) {
    if (num === 0 || num1 === 0) {
        throw Error('Zero is not a valid number');
    }
    return num / num1;
}