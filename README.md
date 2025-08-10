<h1 align="center">🚀 CodeWars Katas Solved</h1>

Started yesterday Thursday, August 7, 2025.

I created this repo to track the Javascript solutions I have successfully submitted on codewars.com. 

I intend concentrating on the principles behind each test in order to track how the tests are organized. 

<h4 align="center">First Kata</h4>

My first codewars kata solution: Formatting phone numbers

[Kata Link](https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript)

Task: Write a function that takes an array of 10 integers (between 0 and 9) 
and returns a string representing a phone number in the format "(xxx) xxx-xxxx".
Example: ```createPhoneNumber([1,2,3,4,5,6,7,8,9,0])``` should return ```"(123) 456-7890"```.
Note: The input array will always contain exactly 10 integers.

[Solution link](js-files/phone_creator.js)

Concepts: Slicing and String concatenation. 

<h4 align="center">Second Kata</h4>

Second Kata involves encoding duplicate characters.

[Kata Link](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c)

Task: The goal of this exercise is to convert a string to a new string 
where each character in the new string is "(" if that character appears 
only once in the original string, or ")" if that character appears 
more than once in the original string. Ignore capitalization when 
determining if a character is a duplicate. 

[Solution link](js-files/duplicate_encoder.js)

Concepts: Arrays, Strings, loops. 

<h4 align="center">Third Kata</h4>

This kata teaches list filtering. 

[Kata link](https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript)

Task: In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out. 

Examples:

```filter_list([1,2,'a','b']) == [1,2]```

```filter_list([1,'a','b',0,15]) == [1,0,15]```

```filter_list([1,2,'aasf','1','123',123]) == [1,2,123]```

[Solution link](js-files/list_filtering.js)

Concepts: Lists, Filtering, Loops, Data Structures

<h4 align="center">Fourth Kata</h4>

The fourth Kata involves decimal to binary conversion. 

[Kata Link](https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript)

Task: Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition. The binary number returned should be a string.

Examples: 

```1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)```

```5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)```

[Solution link](js-files/binary_addition.js)

Concepts: Operations with addition operator, +; binary conversion, String conversion

