// 8. Inverted right-angled triangle pattern with asterisks
// Write a program that takes an integer input i and prints an inverted right-angled triangle patterns of asterisks
// with i rows.
// Inverted right-angled pattern:

// ******
// *****
// ****
// ***
// **
// *

// If i=6





function printInvertedTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let stars = "*".repeat(row);
        console.log(stars);
    }
}

// Example usage:
const i = 6;
printInvertedTriangle(i);


