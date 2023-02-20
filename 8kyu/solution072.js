// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// My Solution

function squareSum(numbers){
    return numbers.length == 0 ? 0 : numbers.map((a, b) => a**2).reduce((x, i) => x + i)
  }