

// 5. Capitalize
// You are building a form where users can enter their names. You want to make sure that the first letter of the
// name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
// string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
// returns the modified string. Otherwise, it returns the original string without any changes.





function capitalizeName(name) {
    const firstLetter = name.charAt(0);
    const capitalizedFirstLetter = firstLetter.toUpperCase();
    const modifiedName = capitalizedFirstLetter + name.slice(1);

    return modifiedName;
}

// Example usage:
const userName = "shashank ";
const capitalizedUserName = capitalizeName(userName);
console.log(`Capitalized name: ${capitalizedUserName}`);
