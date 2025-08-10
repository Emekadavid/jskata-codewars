/*Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition. 
The binary number returned should be a string.
 */

// Intended steps
// 1. Add the two numbers together.
// 2. Convert the sum to binary.
// 3. Return the binary string.
'use strict';

function addBinary(a,b) {
    // add the two numbers
    let sum = a + b;
    // convert the sum to binary
    // first create an empty string to hold the binary representation
    let binaryString = '';
    // use a loop to convert the sum to binary
    while (sum > 0) {
        // get the remainder when divided by 2
        let remainder = sum % 2;
        // prepend the remainder to the binary string
        binaryString = remainder + binaryString;
        // divide the sum by 2 for the next iteration
        sum = Math.floor(sum / 2);
    }
    // return the binary string
    return binaryString || '0'; // handle case where sum is 0

}

// Example usage:
console.log(addBinary(1, 2)); // Output: "11"
console.log(addBinary(5, 9)); // Output: "1110"
console.log(addBinary(0, 0)); // Output: "0"
