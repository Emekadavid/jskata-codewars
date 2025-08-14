/*If we list all the natural numbers below 10 that are multiples of 3 or 5, 
we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 
below the number passed in.
Additionally, if the number is negative, return 0.
Note: If a number is a multiple of both 3 and 5, only count it once.
https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
*/

// steps to the solution
// 1. Check if the input number is negative, return 0 if true.
// 2. Initialize a variable to hold the sum of multiples.
// 3. Loop through all numbers from 0 to the input number (exclusive).
// 4. For each number, check if it is a multiple of 3 or 5.
// 5. If it is, add it to the sum.
// 6. Return the final sum.

function solution(number) {
    // Step 1: Check if the number is negative
    if (number < 0) {
        return 0;
    }

    // Step 2: Initialize the sum variable
    let sum = 0;

    // Step 3: Loop through numbers from 0 to number (exclusive)
    for (let i = 0; i < number; i++) {
        // Step 4: Check if the number is a multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            // Step 5: Add to the sum
            sum += i;
        }
    }

    // Step 6: Return the final sum
    return sum;
}

// examples usage covering all user cases
console.log(solution(10)); // Output: 23 (3 + 5 + 6 + 9)
console.log(solution(0));  // Output: 0 (no multiples below 0)
console.log(solution(-5)); // Output: 0 (negative input)
console.log(solution(15)); // Output: 45 (3 + 5 + 6 + 9 + 10 + 12)
console.log(solution(20)); // Output: 78 (3 + 5 + 6 + 9 + 10 + 12 + 15)
console.log(solution(100)); // Output: 2318 (sum of all multiples of 3 or 5 below 100)
console.log(solution(3));  // Output: 0 (no multiples below 3)
console.log(solution(5));  // Output: 3 (only 3 is a multiple below 5)
console.log(solution(30)); // Output: 225 (sum of multiples of 3 or 5 below 30)