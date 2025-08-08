// my first codewars kata solution
// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Task: Write a function that takes an array of 10 integers (between 0 and 9) 
// and returns a string representing a phone number in the format "(xxx) xxx-xxxx".
// Example: createPhoneNumber([1,2,3,4,5,6,7,8,9,0]) should return "(123) 456-7890".
// Note: The input array will always contain exactly 10 integers.

function createPhoneNumber(numbers){
    // format the number using slicing and string concatenation
    let numOutput = '('+ numbers.slice(0, 3).join('') + ') ' +
                  numbers.slice(3, 6).join('') + '-' +
                  numbers.slice(-4).join('');
    // return the result
    return numOutput;
} 

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);







