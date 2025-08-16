/*
Given an array (arr) as an argument complete the function countSmileys that should 
return the total number of smiling faces.
Rules for a smiling face:
1. Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
2. A smiley face can have a nose but it does not have to. Valid characters 
for a nose are - or ~
3. Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.
Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Order: eyes, nose, mouth
Examples:
countSmileys([':)', ';(', ';}', ':-D']) => 2
countSmileys([':~)', ':~D', ';~D', ':)']) => 4
countSmileys([':)', ':(', ':D', ':~)']) => 3
https://www.codewars.com/kata/583203e6eb35d7980400002a/solutions/javascript
*/

// steps for solution:
// 1. Create a regex pattern to match valid smiley faces.
// 2. Use the filter method to count how many elements in the array match the regex.
// 3. Return the count.

function countSmileys(arr) {
    const smileyPattern = /^[:;][-~]?[)D]$/;
    return arr.filter(face => smileyPattern.test(face)).length;
}

// Example usage:
console.log(countSmileys([':)', ';(', ';}', ':-D'])); // Output: 2
console.log(countSmileys([':~)', ':~D', ';~D', ':)'])); // Output: 4
console.log(countSmileys([':)', ':(', ':D', ':~)'])); // Output: 3
