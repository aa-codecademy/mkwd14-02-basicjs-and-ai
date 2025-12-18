function findLargestForOf(array) {
    let max = -Infinity;
    for (let num of array) {
        console.log(`Checking ${num}, current max: ${max}`);
        if (num > max) {
            max = num;
        }
    }
    return max;
}

// Test arrays
let numbers1 = [34, 5, 9, 7, 45, 12, 89, 2, 33, 77];
let numbers2 = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15];

console.log("Largest in numbers1:", findLargestForOf(numbers1)); // 89
console.log("Largest in numbers2:", findLargestForOf(numbers2)); // 100
