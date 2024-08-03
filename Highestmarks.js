// 4. Highest Marks
// A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters
// the marks of all five students in an array called "marks". Write a program that iterates through the array and
// finds the highest marks scored by any student in the class. The highest marks must then be displayed to the
// teacher using the console. Make sure you use the ternary operator to find the student with the highest marks.


// In this example:

// We initialize highest with a very low value (-Infinity) to ensure any student’s marks will be greater.
// We iterate through the marks array and update highest whenever we find a higher value.
// Finally, we display the highest marks along with the student’s name.



function findHighestMarks(marks) {
    let highest = -Infinity; // Initialize with a very low value
    let highestStudent = "";

    for (const student of marks) {
        if (student > highest) {
            highest = student;
            highestStudent = student;
        }
    }

    return highestStudent;
}

// Example usage:
const marks = [85, 92, 78, 95,88];
const highestMarksStudent = findHighestMarks(marks);
console.log(`Highest marks: ${highestMarksStudent}`);


