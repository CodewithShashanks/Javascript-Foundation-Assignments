

// 3. Color Mixer
// Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
// determine the resulting color when the two colors are mixed. The program should print the resulting color
// #ased on the following criteria"
// 1 If color1 is "red" and color2 is "blue" or vice versa, print "purple".
// 2 If color1 is "red" and color2 is "yellow" or vice versa, print "orange".
// 3 If color1 is "blue" and `color2" is "yellow" or vice versa, print "green"
// 4 If any other com#ination of colors is input, the program should print "Invalid color combination".








function mixColors(color1, color2) {
    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    return "purple";
                case "yellow":
                    return "orange";
                default:
                    return "Invalid color combination";
            }
        case "blue":
            switch (color2) {
                case "yellow":
                    return "green";
                default:
                    return "Invalid color combination";
            }
        default:
            return "Invalid color combination";
    }
}

// Example usage:
console.log(mixColors("red", "blue")); // Output: "purple"
console.log(mixColors("red", "yellow")); // Output: "orange"
console.log(mixColors("blue", "yellow")); // Output: "green"
console.log(mixColors("green", "yellow")); // Output: "Invalid color combination"
``