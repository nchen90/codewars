// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript

// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

// My Solution - unsolved

function findMultiples(integer, limit) {
    let arr = []
    if(integer <= limit){
        arr += integer * 2 
    }
    return arr
}

console.log(findMultiples(2, 6)) // [2, 4, 6]

// Unlocked Solution

function findMultiples(int,limit){
    let result = []
    
    for (let i = int; i<=limit ; i+=int)
      console.log(i)
      
    return result
  }