/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
https://www.codewars.com/kata/520b9d2ad5c005041100000f/javascript
*/

// steps to solve the problem:
// 1. Split the string into words
// 2. For each word, check if it contains only letters
// 3. If it does, move the first letter to the end and add "ay"
// 4. If it doesn't, leave it unchanged
// 5. Join the words back into a string

function pigIt(str) {
    return str.split(' ').map(word => {
        if (/^[a-zA-Z]+$/.test(word)) {
            return word.slice(1) + word[0] + 'ay';
        }
        return word;
    }).join(' ');
}

// Example usage:
console.log(pigIt('Pig latin is cool')); // "igPay atinlay siay oolcay"
console.log(pigIt('Hello world !'));     // "elloHay orldway !"
console.log(pigIt('This is my string')); // "hisTay siay ymay tringsay"
console.log(pigIt('Codewars'));          // "odewarsCay"
console.log(pigIt('JavaScript is fun!'));// "avaScriptJay siay unfay !"