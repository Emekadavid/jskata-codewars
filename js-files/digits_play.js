/* Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1 (n = 89, p = 1, k = 1)
695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2 (n = 695, p = 2, k = 2)
46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51 (n = 46288, p = 3, k = 51)
Given two positive integers n and p, we want to find a positive integer k, 
if it exists, such that the sum of the digits of n raised to consecutive powers 
starting from p is equal to k * n. */

/* steps to take to solve the problem: */
// we'll use BigInt to handle large numbers
// 1. Convert the number n to a string to access its digits.
// 2. Split the string into an array of digits and convert them to numbers.
// 3. Initialize a variable for the current power starting from p.
// 4. Use a loop to calculate the sum of the digits raised to their respective powers.
// 5. Check if the sum is divisible by n, and if so, return k (the quotient).
// 6. If no k is found after a reasonable number of iterations, return -1.
// 7. Use a flexible stopping condition to avoid infinite loops. 
// 8. By checking if the sum stabilizes or grows too large, we can stop searching.

function digPow(n, p) {
    const bigIntN = BigInt(n);
    const digits = String(n).split('').map(Number);
    
    // Set a margin for the number of digits to stop the search
    const margin = 5;
    
    let currentP = p;
    let previousSum = 0n; // Variable to store the sum from the previous iteration

    while (true) {
        let sum = 0n;
        
        // Calculate the sum using BigInts
        for (let i = 0; i < digits.length; i++) {
            const digit = BigInt(digits[i]);
            const power = BigInt(i) + BigInt(currentP);
            sum += digit ** power;
        }

        // Check for a solution
        if (sum % bigIntN === 0n) {
            const k = sum / bigIntN;
            return Number(k);
        }

        // New stopping condition to detect if the sum has stabilized
        if (sum === previousSum && sum > 0n) {
            return -1;
        }

        // Existing flexible stopping condition if the sum grows too large
        // This prevents infinite loops in cases where no k exists
        if (String(sum).length > String(n).length + margin) {
            return -1;
        }
        
        // Update the previousSum for the next iteration
        previousSum = sum;
        currentP++;
    }
}

// Example usage:
console.log(digPow(89, 1)); // 1
console.log(digPow(695, 2)); // 2
console.log(digPow(46288, 3)); // 51
console.log(digPow(123, 1)); // -1 (example where no k is found)
console.log(digPow(100, 1)); // -1 (example where no k is found)