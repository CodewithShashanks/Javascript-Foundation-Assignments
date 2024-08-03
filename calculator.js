
// In this example:

// The calculator function takes three parameters: operator, num1, and num2.
// The switch statement checks the value of operator and performs the corresponding operation.
// If operator is not one of the specified values, the function returns an error message.



function calculator(operator, num1, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return 'Invalid operator';
    }
}

// Example usage:
console.log(calculator('+', 2, 3)); // Output: 5
console.log(calculator('-', 5, 2)); // Output: 3
console.log(calculator('*', 4, 6)); // Output: 24
console.log(calculator('/', 10, 2)); // Output: 5
console.log(calculator('%', 10, 3)); // Output: 'Invalid operator'

