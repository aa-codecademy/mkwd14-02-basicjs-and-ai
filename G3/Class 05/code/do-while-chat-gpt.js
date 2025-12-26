let password;
const correctPassword = "1234";

do {
    password = prompt("Enter your password:");
} while (password !== correctPassword);

console.log("Access granted");
