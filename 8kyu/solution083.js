// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My Solution 

function countPositivesSumNegatives(input) {
    let neg = []
    let pos = []
    
    if (input == null || input.length == 0) return []
    input.sort((a, b) => a - b).map(x => x < 1 ? neg.push(x) : pos.push(x))
    return [pos.length, neg.reduce((a, b) => a + b)]
  }