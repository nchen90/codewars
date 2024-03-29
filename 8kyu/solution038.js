// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

// My Solution

var summation = function (num) {
    let arr = []
    for(i = 0; i <= num; i++){
        arr.push(i)
    }
    return arr.reduce((a, b) => a + b)
}

console.log(summation(8))
