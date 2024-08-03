
// 6. Vowel Counter
// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
// counted.


function countVowels(name) {
    const vowels = "aeiouAEIOU"; // Define the set of vowels
    let vowelCount = 0;

    for (const char of name) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const userName = "shashank";
const numberOfVowels = countVowels(userName);
console.log(`Number of vowels in "${userName}": ${numberOfVowels}`);
