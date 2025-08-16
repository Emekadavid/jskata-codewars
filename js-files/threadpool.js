/*There is a queue for the self-checkout tills at the supermarket. Your task 
is write a function to calculate the total time required for all the customers 
to check out!
input
customers: an array of positive integers representing the queue. Each integer 
represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.
// note that we return the time of the longest queue, which is 10

queueTime([2,3,10], 2)
// should return 12
// because here n=2 because if 2 is in the first queue, 10 gets added to that queue because 
// 2 finishes before the 3 has finished, so the total time is 12
https://www.codewars.com/kata/57b06f90e298a7b53d000147/javascript

*/

// steps to the solution
// 1. Check if the input array is empty, return 0 if true.
// 2. If the number of tills is 1, return the sum of all customer times.
// 3. Create an array to hold the total time for each till.
// 4. Loop through each customer in the queue.
// 5. Assign each customer to the till with the least total time.
// 6. Return the maximum time from the tills array.

function queueTime(customers, n) {
    // Step 1: Handle the edge case of an empty queue
    if (customers.length === 0) {
        return 0;
    }

    // Step 2: If there is only one till, return the sum of all customer times
    if (n === 1) {
        return customers.reduce((total, time) => total + time, 0);
    }

    // Step 3: Create an array to hold the total time for each till
    const tills = new Array(n).fill(0);

    // Step 4: Loop through each customer in the queue
    for (const time of customers) {
        // Find the index of the till with the least total time
        const minTillIndex = tills.indexOf(Math.min(...tills));
        // Add the customer's time to that till
        tills[minTillIndex] += time;
    }

    // Step 6: Return the maximum time from the tills array
    return Math.max(...tills);
}

// examples usage covering all user cases
console.log(queueTime([5, 3, 4], 1)); // Output: 12
console.log(queueTime([10, 2, 3, 3], 2)); // Output: 10
console.log(queueTime([2, 3, 10], 2)); // Output: 12
console.log(queueTime([], 1)); // Output: 0 (empty queue)
console.log(queueTime([1, 2, 3, 4], 3)); // Output: 5 (1st till finishes first)
console.log(queueTime([1, 2, 3, 4, 5], 5)); // Output: 5 (each customer goes to a different till)
console.log(queueTime([10, 20, 30], 2)); // Output: 40 (tills share the workload)
console.log(queueTime([1, 1, 1, 1], 2)); // Output: 2 (two tills share the workload evenly)
console.log(queueTime([5, 10, 15], 3)); // Output: 15 (one till takes the longest time) 