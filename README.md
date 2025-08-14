<h1 align="center">🚀 CodeWars Katas Solved</h1>

Started yesterday Thursday, August 7, 2025.

I created this repo to track the Javascript solutions I have successfully submitted on codewars.com. 

I intend concentrating on the principles behind each test in order to track how the tests are organized. 

<h4><em>Note to reader</em>: To stay on this page, right-click the links below and select "Open Link in New Tab."</h4>

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

<h4 align="center"> Fifth Kata </h4>

This fifth Kata uses computational mathematics to find the quotient of a number that can 
multiply the number such that the result would be equal to summing the exponentiation 
of each digit of the number progressively with a given positive p, such that each
exponentiation starts from the leftmost digit in the number and p increases by 1 progressively. 

[Kata link](https://www.codewars.com/kata/5552101f47fc5178b1000050/solutions/javascript)

Task: given a number n, and a positive integer, p, such that when you raise each digit
in the number starting from the leftmost digit with p such that the first is raised by p, the next by p+1 and so on... on summing the exponents, you can find a k, such that the number multiplied by k is equal to the sum of the exponents. 

Examples:

```if n = 695 and p = 2, k should be 2``` 

```if n = 46288 and p = 3, k should be 51```

```if n = 123 and p = 1, there is no k to satisfy the condition, so we return -1```

[Solution link](js-files/digits_play.js)


Concepts: BigInt, Control flow (while loop, for loop), Data structures (arrays), Maths operators (modulo division, quotient division), Heuristic (sum stabilization and magnitude check)  

<h4 align="center"> Sixth Kata </h4>

This Kata looks for the multiples of 3 or 5 below a given number threshold. For example,
if the given number is 10, the multiples of 3 or 5 are 3, 5, 6, and 9. 

[Kata link](https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
)

Task: Given a number, find all multiples of 3 or 5 below it. If there number is 0
or negative, return 0. Don't double-count numbers. 

[Solution link]()

<h4 align="center"> Seventh Kata </h4>

This Kata's aim is for you to be able to sort strings containing words based on a 
unique number placed in the word. For example, ```3a a2m b4oy I1``` will be sorted to:
```I1 a2m 3a b4oy.``` 

[Kata link](https://www.codewars.com/kata/55c45be3b2079eccff00010f/javascript)

Task: Your task is to sort a given string. Each word in the string will contain 
a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String 
will only contain valid consecutive numbers.

[Solution link]()

<h4 align="center"> Eight Kata </h4>

 This kata simulates a thread. Imagine you have three tasks to run and two concurrent pools, what would be the longest time to finish all tasks? It gives you an idea of the challenge faced by programmers writing threading programs, like java. 

[Kata link](https://www.codewars.com/kata/57b06f90e298a7b53d000147/javascript)

Task: Write a thread program that calculates the longest time to run n tasks given 
k pools, or tills. 

[Solution link]()