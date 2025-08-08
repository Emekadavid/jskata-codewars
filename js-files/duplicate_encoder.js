/* The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears 
only once in the original string, or ")" if that character appears 
more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate. */

// How I intend to solve this:
// 1. Convert the string to lowercase to handle case insensitivity.
// 2. Create a frequency map to count occurrences of each character.
// 3. Iterate through the original string and build the result based on the frequency map.

function duplicateEncode(word) {
    // Convert word to lowercase
    let lowerWord = word.toLowerCase();
    // Initialize the character count object
    let charCount = {};
    // Create a frequency map    
    for (let char of lowerWord) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // Build the result string
    let result = '';
    // Iterate through the original string 
    for (let char of lowerWord) {
        // Append "(" if the character appears only once, otherwise append ")"
        result += charCount[char] === 1 ? '(' : ')';
    }
    return result; // Return the final result string
}

// Example usage
// give example result for '((('
console.log(duplicateEncode(")))"));
