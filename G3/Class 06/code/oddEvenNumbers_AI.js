function filterNumbers(numbers, type) {
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if (type === "even" && numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }

        if (type === "odd" && numbers[i] % 2 !== 0) {
            result.push(numbers[i]);
        }
    }

    return result;
}


filterNumbers([1, 2, 3, 4, 5, 6], "even"); // [2, 4, 6]
filterNumbers([1, 2, 3, 4, 5, 6], "odd");  // [1, 3, 5]
