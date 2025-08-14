/*
Your task is to sort a given string. Each word in the string will contain 
a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String 
will only contain valid consecutive numbers.
*/

// steps to the solution
// 1. Check if the input string is empty, return an empty string if true.
// 2. Split the input string into an array of words.
// 3. Create an array to hold the sorted words.
// 4. Loop through each word in the input array.
// 5. For each word, extract the number and use it to place the word in the correct position in the sorted array.
// 6. Join the sorted array back into a string and return it.
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript

function order(words) {
    // Step 1: Handle the edge case of an empty string
    if (words === "") {
        return "";
    }

    // Step 2: Split the input string into an array of words
    const wordArray = words.split(' ');

    // Step 3: Create an array to hold the sorted words
    const sortedWords = new Array(wordArray.length);

    // Step 4: Loop through each word in the input array
    for (const word of wordArray) {
        // Extract the number from the word
        const position = parseInt(word.match(/\d/)[0], 10) - 1; // Convert to zero-based index
        // Place the word in the correct position in the sorted array
        sortedWords[position] = word;
    }
    
    // Step 5: Join the sorted array back into a string and return it
    return sortedWords.join(' ');
}

// examples usage covering all user cases
console.log(order("is2 Thi1s T4est 3a")); // Output: "Thi1s is2 3a T4est"
console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // Output: "Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order("")); // Output: ""
console.log(order("3one 1two 2three")); // Output: "1two 2three 3one"
console.log(order("5apple 3banana 1cherry 4date 2elderberry")); // Output: "1cherry 2elderberry 3banana 4date 5apple"